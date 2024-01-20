"use client";

import React, { useEffect, useState } from "react";
import { Files, PlusCircle, Sun } from "lucide-react";
import NavItem from "./nav-item";
import ThemeToggle from "./theme-toggle";
import { useTheme } from "next-themes";

export default function MainNav() {
  const { setTheme } = useTheme();
  return (
    <div className="main-nav">
      <NavItem text="Posts" link="/posts">
        <Files className="icon" />
      </NavItem>
      <NavItem text="New" link="/posts/form">
        <PlusCircle className="icon" />
      </NavItem>
      <ThemeToggle setTheme={setTheme} />
    </div>
  );
}
