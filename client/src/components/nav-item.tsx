import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type NavItemProps = {
  children: React.ReactNode;
  icon?: boolean;
  text?: string;
  onClick?: () => void;
};
export default function NavItem({
  children,
  icon = false,
  text,
  onClick,
}: NavItemProps) {
  return (
    <Button
      onClick={onClick}
      className="hover:bg-secondary hover:text-white bg-transparent dark:text-white text-[#252529]"
      size={icon ? "icon" : "default"}
      asChild
    >
      <Link href={"/"} className="gap-x-1">
        {children} {text}
      </Link>
    </Button>
  );
}
