import { generateRandomNumber, truncateText } from "@/lib/utils";
import { Eye } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

type PostProps = {
  post: Post;
  postIndex: number;
  groupIndex: number;
};

export default function Post({ post, postIndex, groupIndex }: PostProps) {
  const renderTitle = (groupIndex: number, postIndex: number, text: string) => {
    if (groupIndex % 2 === 0) {
      // Left group
      if (postIndex > 0) {
        // small cards
        return truncateText(text, 20);
      } else {
        // Large cards
        return text;
      }
    } else {
      // Right group
      if (postIndex > 1) {
        // Large card
        return text;
      } else {
        // small cards
        return truncateText(text, 20);
      }
    }
  };

  const renderClassName = (groupIndex: number, postIndex: number) => {
    let className: string = "large-card";
    className = `${groupIndex % 2 === 0 && postIndex === 0 && "large-card"} ${
      groupIndex % 2 === 0 && postIndex > 0 && "small-card"
    } ${groupIndex % 2 === 1 && postIndex < 2 && `small-card`} ${
      groupIndex % 2 === 1 && postIndex > 1 && `large-card`
    }`;

    return className;
  };

  return (
    <div
      className={`relative p-4 border bg-cover rounded-xl bg-center ${renderClassName(
        groupIndex,
        postIndex
      )}`}
    >
      <Link href={`/posts/${post.id}`}>
        <Image
          fill
          className="object-center object-cover pointer-events-none rounded-xl"
          src={post.cover}
          alt={post.title}
        />

        <div className="card-overlay rounded-xl"></div>
        <div className="absolute flex  items-center bottom-0 left-0 bg-primary p-4 w-full">
          <h3 className="mr-12 text-white capitalize text-sm md:text-xl">
            {renderTitle(groupIndex, postIndex, post.title)}
          </h3>
        </div>
      </Link>
    </div>
  );
}
