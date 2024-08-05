/* eslint-disable @next/next/no-img-element */
"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode, useState } from "react";
import { BsBarChartFill } from "react-icons/bs";
import { FaBuilding, FaUserAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdPayments, MdTry } from "react-icons/md";
import { RiFolderHistoryFill } from "react-icons/ri";
import Account from "./Account";
import { CiMenuKebab } from "react-icons/ci";

interface NavbarProps {
  children: ReactNode;
}

interface NavLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  icon: Icon,
  label,
  isActive,
}) => (
  <Link
    href={href}
    className={`navlink ${
      isActive ? "bg-neutral text-white" : "text-zinc-700 dark:text-zinc-300"
    }`}
  >
    <Icon className="text-xl" /> {label}
  </Link>
);

const TopNavbar: React.FC<NavbarProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [userData, setUserData] = useState<any>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navItems = [
    { href: "/admin/dashboard", icon: BsBarChartFill, label: "Dashboard" },
    { href: "/admin/employee", icon: FaUserAlt, label: "Employee" },
    { href: "/admin/attendance", icon: MdTry, label: "Attendance" },
    { href: "/admin/payroll", icon: MdPayments, label: "Payroll" },
    { href: "/admin/branch", icon: FaBuilding, label: "Branch" },
    { href: "/admin/history", icon: RiFolderHistoryFill, label: "History" },
  ];

  return (
    <div className="h-screen w-screen flex flex-col dark:bg-gray-900">
      {/* topbar */}
      <span className="w-full h-14 z-50 bg-zinc-200 dark:bg-gray-800 justify-between px-3 items-center border-b-2 border-zinc-300 dark:border-zinc-700 flex fixed top-0">
        <details className="dropdown dropdown-start">
          <summary
            tabIndex={0}
            role="button"
            className="h-10 w-10 flex items-center justify-center overflow-hidden border-2 border-primary bg-primary rounded-full"
          >
            {/* <img
              src={userData?.profilePicUrl || "/img/profile-admin.jpg"}
              alt=""
              width={40}
              height={40}
              className="h-full w-full object-cover"
            /> */}
          </summary>
          <Account userData={userData} />
        </details>

        <button
          onClick={toggleMenu}
          className="text-2xl text-zinc-700 dark:text-zinc-300 p-2"
        >
          {isMenuOpen ? <IoClose /> : <CiMenuKebab />}
        </button>
      </span>
      {/* sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed h-screen top-14 bottom-0 bg-zinc-200 dark:bg-gray-800 flex flex-col p-5 gap-2 z-50 items-start justify-start w-3/5"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                icon={item.icon}
                label={item.label}
                isActive={pathname === item.href}
              />
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
      <div className="overflow-y-auto w-full mt-14 dark:bg-gray-900">
        {children}
      </div>
    </div>
  );
};

export default TopNavbar;
