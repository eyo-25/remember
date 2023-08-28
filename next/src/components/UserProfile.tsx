import { ProfileUser } from "@/model/user";
import Avartar from "./Avartar";
import FollowButton from "./FollowButton";

type Props = {
  user: ProfileUser;
};

export default function UserProfile({ user }: Props) {
  const { image, username, name, followers, following, posts } = user;
  const info = [
    { title: "posts", data: posts },
    { title: "followers", data: followers },
    { title: "following", data: following },
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full py-12 border-b md:flex-row border-neutral-300">
      <Avartar image={image} highlight size="xlarge" />
      <div className="md:ml-10 basis-1/3">
        <div className="flex flex-col items-center md:flex-row">
          <h1 className="mb-4 text-2xl md:mr-8 md:my-2">{username}</h1>
          <FollowButton user={user} />
        </div>
        <ul className="flex gap-4 my-4">
          {info.map(({ title, data }, idx) => (
            <li key={idx}>
              <span className="mr-1 font-bold">{data}</span>
              {title}
            </li>
          ))}
        </ul>
        <p className="text-xl font-bold text-center md:text-start">{name}</p>
      </div>
    </section>
  );
}
