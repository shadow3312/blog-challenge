import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import getPost from "@/lib/getPost";
import { getInitials } from "@/lib/utils";
import Image from "next/image";
import React, { Suspense, useEffect } from "react";
import Comments from "./components/comments";
import Loader from "@/components/loader";

type Props = {
  params: { id: number };
};
export default async function Page({ params: { id } }: Props) {
  const response = await getPost(id);
  const { post, author, comments } = response;
  const initials = getInitials(author.name);

  return (
    <div className="md:mx-16">
      <div className="relative h-44 mb-8">
        <Image
          fill
          className="object-center object-cover pointer-events-none rounded-xl"
          src={post.cover}
          alt={post.title}
        />
        <div className="card-overlay rounded-xl"></div>
      </div>
      <div>
        <div className="text-center mb-4">
          <h1 className="capitalize text-3xl">{post.title}</h1>
        </div>
        <div className="md:grid grid-cols-5 mb-4">
          <div className="col-span-4">
            <p>{post.body}</p>
          </div>
          <div className="py-8 px-3 bg-secondary dark:bg-primary col-span-1 rounded-xl shadow">
            <h3 className="text-white mb-2">The author</h3>
            <div className="flex gap-2 items-center">
              <Avatar className="shadow">
                <AvatarImage src="https://i.pravatar.cc/300" />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <div className="justify-center">
                <p className="text-white font-semibold">{author.name}</p>
                <p className="text-sm text-gray-300">{author.email}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl mb-8">{comments?.length} People reacting</h3>
          <Suspense fallback={<Loader />}>
            <Comments comments={comments} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
