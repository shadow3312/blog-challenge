import getAllPosts from "@/lib/getAllPosts";
import React from "react";
import Post from "./single-post";

export default async function Posts() {
  const posts = await getAllPosts();
  const groupedPosts = [];

  // split posts in groups of 6
  for (let i = 0; i < posts?.length; i += 3) {
    groupedPosts.push(posts?.slice(i, i + 3));
  }
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-4">
      {groupedPosts.map((group, groupIndex) => (
        <div key={groupIndex} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {group.map((post: any, postIndex: number) => (
            <Post
              key={post.id}
              groupIndex={groupIndex}
              postIndex={postIndex}
              post={post}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
