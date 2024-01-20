import { render, screen, fireEvent } from "@testing-library/react";
import ThemeToggle from "@/components/theme-toggle";

import { useTheme } from "next-themes";

jest.mock("next-themes", () => ({
  useTheme: () => ({
    theme: "light",
    setTheme: jest.fn(),
  }),
}));

describe("ThemeToggle", () => {
  const setTheme = jest.fn();

  it("renders correctly in light mode", () => {
    render(<ThemeToggle setTheme={setTheme} />);

    const icon = screen.getByRole("img");

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("icon");
    expect(icon).toHaveClass("lucide-moon");
  });

  it("toggles theme from light to dark on click", async () => {
    render(<ThemeToggle setTheme={setTheme} />);

    const toggleBtn = screen.getByRole("button");

    fireEvent.click(toggleBtn);

    // Toggled theme
    expect(setTheme).toHaveBeenCalledWith("dark");
  });
});
