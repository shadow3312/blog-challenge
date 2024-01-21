import supertest from "supertest";
import client from "../../helpers/api";
import { app, server } from "../..";
import { getRandomImage } from "../posts";
import { testCover } from "../../constants";

jest.mock("../../helpers/api");

const request = supertest(app);

describe("Posts Controller", () => {
  const mockData = {
    userId: 1,
    title: "Test Post",
    body: "This is a test post.",
    cover: testCover,
  };

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll((done) => {
    server.close(done);
  });

  describe("GET /posts", () => {
    it("should return all posts", async () => {
      client.get.mockResolvedValueOnce({ data: [mockData] });

      const response = await request.get("/posts");

      expect(response.status).toBe(200);
      expect(response.body).toEqual([mockData]);
    });

    it("should handle errors when fetching all posts", async () => {
      client.get.mockRejectedValueOnce();

      const response = await request.get("/posts");

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: "An error occurred" });
    });
  });

  describe("GET /posts/:id", () => {
    it("should return a specific post with author and comments", async () => {
      const postId = 1;
      const userData = { id: 1, name: "John Doe" };
      const commentsData = [{ id: 1, text: "Comment 1" }];

      client.get.mockResolvedValueOnce({ data: mockData });
      client.get.mockResolvedValueOnce({ data: userData });
      client.get.mockResolvedValueOnce({ data: commentsData });

      const response = await request.get(`/posts/${postId}`);

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        post: mockData,
        author: userData,
        comments: commentsData,
      });
    });

    it("should handle errors when fetching a specific post", async () => {
      client.get.mockRejectedValueOnce();

      const response = await request.get("/posts/1");

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: "Post not found" });
    });
  });

  describe("POST /posts", () => {
    it("should create a new post", async () => {
      client.post.mockResolvedValueOnce({ data: mockData });

      const response = await request.post("/posts").send(mockData);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(mockData);
    });

    it("should handle validation errors for missing title", async () => {
      // Omitting the 'title' field on purpose
      const invalidData = {
        userId: 1,
        body: "This is an invalid post.",
      };

      const response = await request.post("/posts").send(invalidData);

      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        error: "Validation failed: Title is required.",
      });
    });

    it("should handle validation errors for missing body", async () => {
      // Omitting the 'body' field on purpose
      const invalidData = {
        userId: 1,
        title: "Invalid Post",
      };

      const response = await request.post("/posts").send(invalidData);

      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        error: "Validation failed: Body is required.",
      });
    });

    it("should handle validation errors for missing userId", async () => {
      // Omitting the 'userId' field on purpose
      const invalidData = {
        title: "Invalid Post",
        body: "This is an invalid post.",
      };

      const response = await request.post("/posts").send(invalidData);

      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        error: "Validation failed: User ID is required.",
      });
    });
  });
});
