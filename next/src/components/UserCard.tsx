import { SearchUser } from "@/model/user";
import Link from "next/link";
import Avartar from "./Avartar";

type Props = {
  user: SearchUser;
};
export default function UserCard({
  user: { name, username, image, following, followers },
}: Props) {
  return (
    <Link
      href={`/user/${username}`}
      className="flex items-center w-full p-4 mb-2 bg-white border rounded-sm border-neutral-300 hover:bg-neutral-50 "
    >
      <Avartar image={image} />
      <div className="text-neutral-500">
        <p className="font-bold leading-4 text-black">{username}</p>
        <p>{name}</p>
        <p className="text-sm leading-4">{`${followers} followers ${following} following`}</p>
      </div>
    </Link>
  );
}
