"use client";

import useSWR from "swr";
import { FormEvent, useState } from "react";
import { SearchUser } from "@/model/user";
import GridSpinner from "./GridSpinner";
import UserCard from "./UserCard";
import useDebounce from "@/hooks/useDebounce";

export default function UserSearch() {
  const [keyword, setKeyword] = useState("");
  const debounceKeyword = useDebounce(keyword, 2000);
  const {
    data: users,
    isLoading,
    error,
  } = useSWR<SearchUser[]>(`/api/search/${debounceKeyword}`);

  const onsubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <section className="flex flex-col items-center w-full max-w-4xl mx-auto mt-10">
      <form className="w-full mb-4" onSubmit={onsubmit}>
        <input
          className="w-full p-3 text-xl border border-gray-400 outline-none"
          type="text"
          autoFocus
          placeholder="Search for a username or name"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      {error && <p>Something Wrong!</p>}
      {isLoading && <GridSpinner />}
      {!isLoading && !error && users?.length === 0 && <p>찾는 사용자가 없음</p>}
      <ul className="w-full p-4">
        {users &&
          users.map((user) => (
            <li key={user.username}>
              <UserCard user={user} />
            </li>
          ))}
      </ul>
    </section>
  );
}
