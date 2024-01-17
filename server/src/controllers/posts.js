import client from "../helpers/api";

const postsEndpoint = `/posts`;

const validateField = (field, fieldName) => {
  if (!field) {
    throw new Error(`Validation failed: ${fieldName} is required.`);
  }
};

const getRandomImage = async () => {
  try {
    const response = await client.get(
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

    // Add a 'cover' field to each post with a random image
    const postsWithCover = await Promise.all(
      data.map(async (post) => {
        const cover = await getRandomImage();
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
    const userResponse = await client.get(`/users/${userId}`);
    const user = userResponse.data;

    // Fetch comments
    const commentsResponse = await client.get(`/comments?postId=${post.id}`);

    const postData = {
      post: postResponse.data,
      author: userResponse.data,
      comments: commentsResponse.data,
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
