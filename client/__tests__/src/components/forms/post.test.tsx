import { render, fireEvent, waitFor } from "@testing-library/react";
import PostForm from "@/components/forms/post";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useRouter: jest.fn(),
}));

describe("PostForm Component", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      back: jest.fn(),
    });
  });
  it("renders the PostForm component correctly", () => {
    const { getByText, getByPlaceholderText } = render(<PostForm />);

    expect(getByText("New post")).toBeInTheDocument();
    expect(getByPlaceholderText("Title")).toBeInTheDocument();
    expect(getByPlaceholderText("Body")).toBeInTheDocument();
  });

  it("displays an error message for invalid data", async () => {
    const { getByText, getByPlaceholderText } = render(<PostForm />);

    fireEvent.change(getByPlaceholderText("Title"), {
      target: { value: "Te" },
    });
    fireEvent.change(getByPlaceholderText("Body"), {
      target: { value: "Test Body" },
    });

    fireEvent.click(getByText("Send"));

    await waitFor(() => {
      expect(
        getByText("The title must contain at least 3 characters.")
      ).toBeInTheDocument();
    });
  });
});
