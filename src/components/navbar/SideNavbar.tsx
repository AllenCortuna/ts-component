/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState, ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import { BsBarChartFill } from "react-icons/bs";
import { MdTry, MdPayments } from "react-icons/md";
import { RiFolderHistoryFill } from "react-icons/ri";
import { FaUserAlt, FaBuilding } from "react-icons/fa";
import Image from "next/image";
import { IoIosArrowBack, IoLogoSlack } from "react-icons/io";
// import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import Account from "./Account";
import navItems from "./navItems";
import { NavLink } from "./NavLink";
interface NavbarProps {
  children: ReactNode;
}

const SideNavbar: React.FC<NavbarProps> = ({ children }) => {
  const [isMinimized, setIsMinimized] = useState(() => {
    // Initialize state from localStorage if available, otherwise default to false
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("isNavbarMinimized");
      return saved !== null ? JSON.parse(saved) : false;
    }
    return false;
  });

  const pathname = usePathname();
  const [userData, setUserData] = useState<any>(null);
  const [showNotif, setShowNotif] = useState<boolean>(false);

  useEffect(() => {
    // Save isMinimized state to localStorage whenever it changes
    localStorage.setItem("isNavbarMinimized", JSON.stringify(isMinimized));
  }, [isMinimized]);
  const toggleNavbar = () => {
    setIsMinimized((prev: boolean) => !prev);
  };


  return (
    <div className="h-screen w-full flex flex-col">
      <span className="w-full h-14 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 custom-shadow justify-between px-5 items-center border-b border-zinc-300 dark:border-zinc-700 hidden md:flex">
        <span className="flex items-center text-white font-semibold rounded-md gap-2">
          {/* <Image
            width={50}
            height={50}
            src={"/img/smarthr-logo.png"}
            alt="logo"
            className="w-14 drop-shadow-lg"
          /> */}
          <IoLogoSlack className="text-3xl" />
          {/* {!isMinimized && <p className="text-white font-semibold">Brand Name</p>} */}
        </span>
        <div className="flex items-center gap-4">
          <details className="dropdown dropdown-end" >
            <summary
              tabIndex={0}
              role="button"
              className="h-10 w-10 flex items-center justify-center overflow-hidden border-2 border-primary bg-primary rounded-full"
            >
              {/* <img
                src={userData?.profilePicUrl || "/img/profile-admin.jpg"}
                alt="profile"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              /> */}
            </summary>
            <Account userData={userData} />
          </details>
        </div>
      </span>
      <div className="w-full overflow-y-auto h-full flex">
        <nav
          className={`flex ${
            isMinimized ? "w-20" : "w-56"
          } bg-gray-100 dark:bg-gray-800 dark:to-gray-900 custom-shadow dark:border-r dark:border-zinc-700  relative h-auto transition-width duration-300 flex-col items-start justify-start pt-5 p-4 gap-2`}
        >
               {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                icon={item.icon}
                label={item.label}
                isMinimized={isMinimized}
                isActive={pathname === item.href}
              />
            ))}
          <button
            onClick={toggleNavbar}
            className={`flex items-center p-1 border bg-zinc-100 border-zinc-300 dark:border-zinc-700 absolute -right-4 dark:bg-gray-800 bottom-14 text-zinc-400  rounded-full transition-all duration-300 ${
              isMinimized ? "transform rotate-180" : ""
            }`}
          >
            <IoIosArrowBack className="text-xl" />
          </button>
        </nav>
        <div className="overflow-y-auto w-full dark:bg-gray-900 bg-none flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;