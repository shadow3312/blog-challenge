import { apiRoot } from "@/contants";

export default async function getPost(id: number) {
  const res = await fetch(`${apiRoot}/posts/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Failed");

  return res.json();
}
