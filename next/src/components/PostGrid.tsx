import useSWR from "swr";
import GridSpinner from "./GridSpinner";
import PostGridCard from "./PostGridCard";
import usePosts from "@/hooks/usePosts";
import { useCashKeys } from "@/app/context/CacheKeyContext";

export const dynamic = "force-dynamic";

export default function PostGrid() {
  const { posts, isLoading } = usePosts();

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
