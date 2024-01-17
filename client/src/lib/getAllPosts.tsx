import { apiRoot } from "@/contants";

export default async function getAllPosts() {
  const res = await fetch(`${apiRoot}/posts`, {
    cache: "no-cache",
  });

  if (!res.ok) throw new Error("Failed");

  return res.json();
}
