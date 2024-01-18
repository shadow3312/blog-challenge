"use client";

import { LoaderIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import NavItem from "./nav-item";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

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
      {isDark ? <Sun className="icon" /> : <Moon className="icon" />}
    </NavItem>
  );
}
