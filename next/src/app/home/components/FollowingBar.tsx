"use client";

import Avartar from "@/components/Avartar";
import ScrollableBar from "@/components/ScrollableBar";
import useMe from "@/hooks/useMe";
import Link from "next/link";
import { PropagateLoader } from "react-spinners";

export default function FollowingBar() {
  const { user, isLoading: loading, error } = useMe();

  const users = user?.following && [...user?.following];

  return (
    <section className="relative z-0 w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto">
      {loading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        (!users || users.length === 0) && <p>{`You don't have following`}</p>
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ image, username }) => (
            <Link
              key={username}
              className="flex flex-col items-center w-20"
              href={`/user/${username}`}
            >
              <Avartar image={image} highlight />
              <p className="w-full overflow-hidden text-sm text-center text-ellipsis">
                {username}
              </p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}
