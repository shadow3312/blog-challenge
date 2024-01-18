type Post = {
  id: number;
  title: string;
  body: string;
  cover: string;
  userId: number;
};

type PostComment = {
  id: number;
  name: string;
  email: string;
  body: string;
  postId: number;
};
