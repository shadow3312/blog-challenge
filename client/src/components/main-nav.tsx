"use client";

import { useTheme } from "next-themes";
import React from "react";
import { Home, Moon, Pen, Sun } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import NavItem from "./nav-item";

export default function MainNav() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";
  const iconColor = isDark ? "#fff" : "#000";

  const toggleTheme = () => {
    setTheme("");
  };

  return (
    <div className="main-nav">
      <NavItem text="Posts">
        <Pen className="icon" />
      </NavItem>
      <NavItem
        icon
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Moon className="icon" />
        ) : (
          <Sun className="icon" />
        )}
      </NavItem>
    </div>
  );
}
