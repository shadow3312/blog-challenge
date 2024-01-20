import { render } from "@testing-library/react";
import Post from "@/components/single-post";

// Mock Post data for testing
const mockPost = {
  id: 1,
  title: "Test Post",
  body: "The body goes here",
  userId: 1,
  cover: "https://example.com/test.jpg",
};

describe("Single Post Component", () => {
  it("renders correctly", () => {
    const { getByText, getByAltText } = render(
      <Post post={mockPost} postIndex={0} groupIndex={0} />
    );

    // Check if title is rendered
    expect(getByText("Test Post")).toBeInTheDocument();

    // Check if the image is rendered with the correct alt text
    expect(getByAltText("Test Post")).toBeInTheDocument();
  });

  it("returns correct classname for large card in left group", () => {
    const { container } = render(
      <Post post={mockPost} postIndex={0} groupIndex={0} />
    );

    // Post card with index 0 in the left group should be large
    expect(container.firstChild).toHaveClass("large-card");
  });

  it("returns correct classname for small cards in left group", () => {
    const { container } = render(
      // Any odd value for the groupIndex means that the post will be rendered on the left group

      <Post post={mockPost} postIndex={1} groupIndex={2} />
    );

    // Post cards with indexes 1 and 2 from the left group should be small
    expect(container.firstChild).toHaveClass("small-card");
  });

  it("returns correct classname for small cards in right group", () => {
    // Any even value for the groupIndex means that the post will be rendered on the right group
    const { container } = render(
      <Post post={mockPost} groupIndex={1} postIndex={0} />
    );

    // Post cards with index 0 and 1 from the right group should be small
    expect(container.firstChild).toHaveClass("small-card");
  });

  it("returns correct classname for large card in the right group", () => {
    const { container } = render(
      <Post post={mockPost} groupIndex={3} postIndex={2} />
    );

    // Post card with index 2 in the right group should be large
    expect(container.firstChild).toHaveClass("large-card");
  });
});
