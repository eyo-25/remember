"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "./icons/icons";

const LINKS = [
  {
    icon: Icons.AiOutlineHome,
    selectIcon: Icons.AiFillHome,
    href: "/",
  },
  {
    icon: Icons.RiSearchLine,
    selectIcon: Icons.RiSearchFill,
    href: "/search",
  },
  {
    icon: Icons.BsPlusSquare,
    selectIcon: Icons.BsPlusSquareFill,
    href: "/new",
  },
];

export default function Header() {
  const path = usePathname();

  return (
    <header className="fixed top-0 z-10 w-full h-16 bg-white">
      <div className="flex items-center justify-between w-full h-full px-6 mx-auto max-w-7xl">
        <Link href="/">
          <h1 className="text-3xl font-extrabold">Remember</h1>
        </Link>
        <nav className="flex items-center">
          <ul className="flex gap-5">
            {LINKS.map((link, i) => (
              <li key={i}>
                <Link href={link.href}>
                  {link.href === path ? (
                    <link.selectIcon className="w-7 h-7" />
                  ) : (
                    <link.icon className="w-7 h-7" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <button className="p-2 ml-4 text-white bg-black rounded">
            Sign in
          </button>
        </nav>
      </div>
    </header>
  );
}
