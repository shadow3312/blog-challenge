import React from "react";
import { render } from "@testing-library/react";
import Title from "@/components/title";

describe("Title Component", () => {
  it("renders the title correctly", () => {
    const { getByText } = render(<Title text="Test Title" />);
    const titleElement = getByText("Test Title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H1");
    expect(titleElement.className).toBe("text-center mb-8");
  });

  it("renders a different title correctly", () => {
    const { getByText } = render(<Title text="Another Title" />);
    const titleElement = getByText("Another Title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H1");
    expect(titleElement.className).toBe("text-center mb-8");
  });
});
