"use client";

import React, { ReactNode } from "react";
import TopNavbar from "./navbar/TopBar";
import SideNavbar from "./navbar/SideNavbar";

interface NavbarProps {
  children: ReactNode;
}

const AdminLayout: React.FC<NavbarProps> = ({ children }) => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <TopNavbar>{children}</TopNavbar>
      ) : (
        <SideNavbar>{children}</SideNavbar>
      )}
    </>
  );
};

export default AdminLayout;