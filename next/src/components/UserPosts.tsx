"use client";

import { ProfileUser } from "@/model/user";
import { useState } from "react";
import PostIcon from "./icons/PostIcon";
import BookmarkIcon from "./icons/BookmarkIcon";
import HeartIcon from "./icons/HeartIcon";
import PostGrid from "./PostGrid";
import { CacheKeyContext } from "@/app/context/CacheKeyContext";

type Props = {
  user: ProfileUser;
};

const tabs = [
  { type: "posts", icon: <PostIcon style="w-3 h-3" />, title: "User posts" },
  {
    type: "saved",
    icon: <BookmarkIcon style="w-3 h-3" />,
    title: "Saved posts",
  },
  { type: "liked", icon: <HeartIcon style="w-3 h-3" />, title: "Like posts" },
];

export default function UserPosts({ user: { username } }: Props) {
  const [query, setquery] = useState(tabs[0].type);

  return (
    <section className="">
      <ul className="flex justify-center uppercase">
        {tabs.map(({ type, icon, title }) => (
          <li
            className={`flex p-4 mx-12 cursor-pointer ${
              type === query && `border-black font-bold border-t`
            }`}
            key={type}
            onClick={() => setquery(type)}
          >
            <button aria-label={title} className="mr-2 scale-150 md:scale-100">
              {icon}
            </button>
            <span className="hidden md:inline">{type}</span>
          </li>
        ))}
      </ul>
      <CacheKeyContext.Provider
        value={{ postsKey: `/api/users/${username}/${query}` }}
      >
        <PostGrid />
      </CacheKeyContext.Provider>
    </section>
  );
}
