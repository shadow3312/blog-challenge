import axios from "axios";
import client from "../helpers/api";
import { testCover } from "../constants";

const postsEndpoint = `/posts`;

const validateField = (field, fieldName) => {
  if (!field) {
    throw new Error(`Validation failed: ${fieldName} is required.`);
  }
};

export const getRandomImage = async () => {
  try {
    const response = await axios.get(
      "https://random.imagecdn.app/v1/image?&format=json"
    );
    return response.data.url;
  } catch (error) {
    console.error("Error fetching random image:", error.message);
    return null;
  }
};

export const findAll = async (req, res) => {
  try {
    const response = await client.get(postsEndpoint);
    const { data } = response;
    const isTest = process.env.NODE_ENV === "test";

    // Add a 'cover' field to each post with a random image
    const postsWithCover = await Promise.all(
      data.map(async (post) => {
        const cover = isTest ? testCover : await getRandomImage();
        return { ...post, cover };
      })
    );

    res.status(200).json(postsWithCover);
  } catch (error) {
    res.status(500).json({ error: `An error occurred` });
  }
};

export const findByPk = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch single post
    const postResponse = await client.get(`${postsEndpoint}/${id}`);
    const post = postResponse.data;

    // Fetch the related user
    const { userId } = post;
    const authorResponse = await client.get(`/users/${userId}`);
    const author = authorResponse.data;

    // Fetch comments
    const commentsResponse = await client.get(`/comments?postId=${post.id}`);

    const comments = commentsResponse.data;

    const postCover = await getRandomImage();
    post.cover = postCover;

    const postData = {
      post,
      author,
      comments,
    };

    res.status(200).json(postData);
  } catch (error) {
    res.status(404).json({ error: `Post not found` });
  }
};

export const create = async (req, res) => {
  try {
    const { title, body, userId } = req.body;

    // Fields validation
    validateField(title, "Title");
    validateField(body, "Body");
    validateField(userId, "User ID");

    const postResponse = await client.post(postsEndpoint, {
      title,
      body,
      userId,
    });
    const post = postResponse.data;

    return res.status(201).json(post);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
