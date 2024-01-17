"use client";

import { useTheme } from "next-themes";
import React from "react";
import { Files, Moon, PlusCircle, Sun } from "lucide-react";
import NavItem from "./nav-item";

export default function MainNav() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme("");
  };

  return (
    <div className="main-nav">
      <NavItem text="Posts">
        <Files className="icon" />
      </NavItem>
      <NavItem text="Add" link="/form">
        <PlusCircle className="icon" />
      </NavItem>
      <NavItem icon onClick={() => setTheme(isDark ? "light" : "dark")}>
        {isDark ? <Moon className="icon" /> : <Sun className="icon" />}
      </NavItem>
    </div>
  );
}
