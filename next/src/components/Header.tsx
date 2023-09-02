"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "./icons/icons";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "./Button";
import Avartar from "./Avartar";

const LINKS = [
  {
    icon: Icons.AiOutlineHome,
    selectIcon: Icons.AiFillHome,
    href: "/",
    title: "Home",
  },
  {
    icon: Icons.RiSearchLine,
    selectIcon: Icons.RiSearchFill,
    href: "/search",
    title: "Search User",
  },
  {
    icon: Icons.BsPlusSquare,
    selectIcon: Icons.BsPlusSquareFill,
    href: "/new",
    title: "New Post",
  },
];

export default function Header() {
  const path = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <header className="fixed top-0 z-10 w-full h-16 bg-white">
      <div className="flex items-center justify-between w-full h-full px-6 mx-auto max-w-7xl">
        <Link href="/" aria-label="Home">
          <h1 className="text-3xl font-extrabold">Remember</h1>
        </Link>
        <nav className="flex items-center">
          <ul className="flex gap-5">
            {LINKS.map((link, i) => (
              <li key={i}>
                <Link href={link.href} aria-label={link.title}>
                  {link.href === path ? (
                    <link.selectIcon className="w-7 h-7" />
                  ) : (
                    <link.icon className="w-7 h-7" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          {user && (
            <Link className="mx-5" href={`/user/${user.username}`}>
              <Avartar highlight={true} size="small" image={user.image} />
            </Link>
          )}
          {session ? (
            <Button text={"LogOut"} onClick={() => signOut()} />
          ) : (
            <Button text={"SignIn"} onClick={() => signIn()} />
          )}
        </nav>
      </div>
    </header>
  );
}
