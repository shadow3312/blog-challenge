import { render } from "@testing-library/react";
import MainNav from "@/components/main-nav";
import { useTheme } from "next-themes";
jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
}));

describe("MainNav Component", () => {
  beforeEach(() => {
    // Mock the useTheme hook
    (useTheme as jest.Mock).mockReturnValue({ setTheme: jest.fn() });
  });

  it("renders the MainNav component with navigation links", () => {
    const { getByText } = render(<MainNav />);

    // Check if navigation links are rendered
    const postsLink = getByText("Posts");
    const newLink = getByText("New");
    expect(postsLink).toBeInTheDocument();
    expect(newLink).toBeInTheDocument();
  });
});
