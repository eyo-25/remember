"use client";

import { HomeUser, ProrfileUser } from "@/model/user";
import useSWR from "swr";
import Button from "./Button";

type Props = {
  user: ProrfileUser;
};

export default function FollowButton({ user }: Props) {
  const { username } = user;
  const { data: loggedInUser } = useSWR<HomeUser>("/api/me");

  // 로그인 안한사람 + 로그인한 사람과 현재 페이지의 유저이름이
  const showButton = loggedInUser && loggedInUser.username !== username;
  const following =
    loggedInUser &&
    loggedInUser.following.find((item) => item.username === username);

  const text = following ? "Unfollow" : "Follow";
  return (
    <>
      {showButton && (
        <Button
          text={text}
          onClick={() => {}}
          style={
            text === "Unfollow" ? "bg-red-500 px-8 leading-4 font-bold" : ""
          }
        />
      )}
    </>
  );
}