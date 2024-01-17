import Posts from "@/components/posts";
import Post from "@/components/single-post";
import Title from "@/components/title";
import getAllPosts from "@/lib/getAllPosts";
import Image from "next/image";

export default async function Home() {
  return (
    <div>
      <Title text="Welcome to the Blog Challenge" />
      <Posts />
    </div>
  );
}
