"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

export function Modal({ children }: ModalProps) {
  const router = useRouter();
  const pathname = usePathname();
  const shouldShowModal = pathname.includes("/form");

  const handleOnOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  if (!shouldShowModal) return null;
  return (
    <Dialog open onOpenChange={handleOnOpenChange}>
      <DialogContent className="sm:max-w-md">{children}</DialogContent>
    </Dialog>
  );
}
