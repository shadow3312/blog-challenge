import Posts from "@/components/posts";
import Post from "@/components/single-post";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import getAllPosts from "@/lib/getAllPosts";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Title text="Welcome to the Blog Challenge" />
      <Button asChild className="dark:text-white">
        <Link href={`/posts/`}>
          <p>See all posts</p>
        </Link>
      </Button>
    </div>
  );
}
