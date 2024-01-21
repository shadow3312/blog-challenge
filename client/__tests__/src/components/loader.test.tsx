import { render } from "@testing-library/react";
import Loader from "@/components/loader";

describe("Loader Component", () => {
  it("renders the Loader component with the correct attributes", () => {
    const { getByAltText, getByTestId } = render(<Loader />);

    // Check if the Image component is rendered with the correct attributes
    const image = getByAltText("loading...");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("height", "50");
    expect(image).toHaveAttribute("width", "50");
  });
});
