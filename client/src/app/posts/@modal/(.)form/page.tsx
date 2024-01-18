import PostForm from "@/components/forms/post";
import { Modal } from "@/components/modal";
import React from "react";

export default function Page() {
  return (
    <Modal>
      <PostForm />
    </Modal>
  );
}
