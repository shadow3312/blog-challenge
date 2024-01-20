"use client";

import { LoaderIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import NavItem from "./nav-item";

type Props = {
  setTheme: (theme: string) => void;
};

export default function ThemeToggle({ setTheme }: Props) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <LoaderIcon className="animate-spin" />;
  }
  return (
    <NavItem icon onClick={toggleTheme} link="#">
      {isDark ? (
        <Sun className="icon" role="img" />
      ) : (
        <Moon className="icon" role="img" />
      )}
    </NavItem>
  );
}
