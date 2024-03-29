import { apiRoot } from "@/contants";

export default async function getAllPosts() {
  const res = await fetch(`${apiRoot}/posts`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Failed");

  return res.json();
}
