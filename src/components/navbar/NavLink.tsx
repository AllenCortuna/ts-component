import Link from "next/link";
import React from "react";
interface NavLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  isMinimized: boolean;
  isActive: boolean;
}
export const NavLink: React.FC<NavLinkProps> = ({
  href,
  icon: Icon,
  label,
  isMinimized,
  isActive,
}) => (
  <Link
    href={href}
    className={`w-full items-center justify-start flex gap-3 text-sm font-[600] p-3 hover:bg-secondary rounded-md hover:text-white transition-all duration-300 hover:dark:text-white hover:shadow-md hover:drop-shadow-sm ${
      isActive ? "bg-neutral text-white" : "text-zinc-700 dark:text-zinc-400"
    }`}
  >
    <span className={`w-auto ${isMinimized && " mx-auto"}`}>
      <Icon className="text-xl" />
    </span>
    {!isMinimized && label}
  </Link>
);
