import Posts from "@/components/posts";
import Title from "@/components/title";
import React from "react";

export default function Page() {
  return (
    <div>
      <Title text="Welcome to the Blog Challenge" />
      <Posts />
    </div>
  );
}
