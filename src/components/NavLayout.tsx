"use client";

import React, { ReactNode } from "react";
import TopNavbar from "./navbar/TopBar";
import SideNavbar from "./navbar/SideNavbar";
import Header from "./navbar/Header";

interface NavbarProps {
  children: ReactNode;
}

const NavLayout: React.FC<NavbarProps> = ({ children }) => {
  return (
    <div className="flex gap-0">
      <SideNavbar />
      <div className="flex flex-col w-full">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default NavLayout;
