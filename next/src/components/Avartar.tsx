import Image from "next/image";
import Link from "next/link";

type Props = {
  user: {
    username: string;
    image?: string;
  };
};

export default function Avartar({ user }: Props) {
  const { username, image } = user;

  return (
    <>
      <Link href={`/user/${username}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-10 h-10 ml-5"
          src={image ?? undefined}
          referrerPolicy="no-referrer"
          alt="user profile"
        />
      </Link>
    </>
  );
}
