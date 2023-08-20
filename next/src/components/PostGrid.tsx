import useSWR from "swr";
import GridSpinner from "./GridSpinner";
import { SimplePost } from "@/model/post";
import PostGridCard from "./PostGridCard";

type Props = {
  username: string;
  query: string;
};

export default function PostGrid({ username, query }: Props) {
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR<SimplePost[]>(`/api/users/${username}/${query}`);
  console.log(posts);

  return (
    <div className="relative w-full text-center aspect-square">
      {isLoading && <GridSpinner />}
      <ul className="grid grid-cols-3 gap-4 px-8 py-4">
        {posts &&
          posts.map((post, idx) => (
            <li key={post.id}>
              <PostGridCard post={post} priority={idx < 6} />
            </li>
          ))}
      </ul>
    </div>
  );
}
