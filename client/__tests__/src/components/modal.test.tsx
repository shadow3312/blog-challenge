import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { usePathname, useRouter } from "next/navigation";
import { Modal } from "@/components/modal";

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

describe("Modal Component", () => {
  it("does not render when shouldShowModal is false", () => {
    // Mock the usePathname hook to return a path that does not include "/form"
    (usePathname as jest.Mock).mockReturnValue("/otherpath");

    const { container } = render(<Modal>Modal Content</Modal>);

    // Expect that the modal is not rendered
    expect(container.firstChild).toBeNull();
  });

  it("renders when shouldShowModal is true", () => {
    (usePathname as jest.Mock).mockReturnValue("/form");

    const { getByText } = render(<Modal>Modal Content</Modal>);

    // Expect that the modal is rendered with the specified content
    expect(getByText("Modal Content")).toBeInTheDocument();
  });

  it("closes the modal and navigates back when closed", () => {
    (usePathname as jest.Mock).mockReturnValue("/form");

    // Mock the useRouter hook
    const backMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      back: backMock,
    });

    const { getByRole } = render(<Modal>Modal Content</Modal>);

    // Click the close button
    fireEvent.click(getByRole("button"));

    // Expect that the modal is closed and router.back is called
    expect(backMock).toHaveBeenCalled();
  });
});
