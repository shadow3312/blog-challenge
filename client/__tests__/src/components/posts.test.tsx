import { render, waitFor } from "@testing-library/react";
import Posts from "@/components/posts";
import getAllPosts from "@/lib/getAllPosts";

// Mock the getAllPosts function
jest.mock("@/lib/getAllPosts");

// Mock posts data for testing
const mockPosts = [
  { id: 1, title: "Post 1", content: "Content 1", cover: "/img1.jpg" },
  { id: 2, title: "Post 2", content: "Content 2", cover: "/img2.jpg" },
  { id: 3, title: "Post 3", content: "Content 3", cover: "/img1.png" },
];

describe("Posts components", () => {
  it("renders posts correctly", async () => {
    /* @ts-expect-error */
    getAllPosts.mockResolvedValue(mockPosts);

    const Result = await Posts();

    const { getByText, queryByText, getByAltText } = render(Result);

    await waitFor(() => {
      // Check for correct rendered posts
      expect(getByText("Post 1")).toBeInTheDocument();
      expect(getByAltText("Post 1")).toBeInTheDocument();
      expect(getByText("Post 2")).toBeInTheDocument();
      expect(getByAltText("Post 2")).toBeInTheDocument();
      expect(getByText("Post 3")).toBeInTheDocument();
      expect(getByAltText("Post 3")).toBeInTheDocument();

      // Check for the absence of "Post 4"
      expect(queryByText("Post 4")).toBeNull();
    });
  });
});
