import client from "../helpers/api";

const postsEndpoint = `/posts`;

export const findAll = async (req, res) => {
  try {
    const response = await client.get(postsEndpoint);
    const { data } = response;

    res.status(200).json(data);
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
    const data = req.body;

    const postResponse = await client.post(postsEndpoint, data);
    const post = postResponse.data;

    return res.status(201).json(post);
  } catch (error) {
    return res.status(400).json({ error: `An error occurred` });
  }
};
