import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { generateRandomNumber, getInitials } from "@/lib/utils";
import React from "react";

type CommentProps = {
  comment: PostComment;
};
export default function Comment({ comment }: CommentProps) {
  const initials = getInitials(comment.email);
  const randomNumber = generateRandomNumber();
  return (
    <div className="mb-12">
      <div className="flex gap-4">
        <Avatar className="shadow">
          <AvatarImage src={`https://i.pravatar.cc/${randomNumber}`} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="shadow p-4 bg-white dark:bg-primary rounded-lg">
          <p className="font-semibold text-sm mb-2">{comment.email}</p>
          <p>{comment.body}</p>
        </div>
      </div>
    </div>
  );
}
