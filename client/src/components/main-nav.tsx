import React, { useEffect, useState } from "react";
import { Files, PlusCircle, Sun } from "lucide-react";
import NavItem from "./nav-item";
import ThemeToggle from "./theme-toggle";

export default function MainNav() {
  return (
    <div className="main-nav">
      <NavItem text="Posts">
        <Files className="icon" />
      </NavItem>
      <NavItem text="Add" link="/form">
        <PlusCircle className="icon" />
      </NavItem>
      <ThemeToggle />
    </div>
  );
}
