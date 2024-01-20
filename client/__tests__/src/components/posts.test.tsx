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
      mockPosts.forEach((post) => {
        expect(getByText(post.title)).toBeInTheDocument();
        expect(getByAltText(post.title)).toBeInTheDocument();
      });

      // Check for the absence of "Post 4"
      const nonExistentPostTitle = "Post 4";
      expect(queryByText(nonExistentPostTitle)).toBeNull();
    });
  });
});
