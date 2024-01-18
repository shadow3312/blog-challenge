import Loader from "@/components/loader";
import Posts from "@/components/posts";
import Title from "@/components/title";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <Title text="Welcome to the Blog Challenge" />
      <Suspense fallback={<Loader />}>
        <Posts />
      </Suspense>
    </div>
  );
}
