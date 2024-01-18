import Image from "next/image";
import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center">
      <Image src="/loader.gif" alt="loading..." height={50} width={50} />
    </div>
  );
}
