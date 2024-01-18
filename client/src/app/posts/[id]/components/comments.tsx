import React from "react";
import Comment from "./single-comment";

type CommentsProps = {
  comments: PostComment[];
};
export default function Comments({ comments }: CommentsProps) {
  return (
    <div>
      {comments?.map((comment: PostComment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
