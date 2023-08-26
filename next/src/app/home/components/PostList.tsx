"use client";

import PostListCard from "./PostListCard";
import GridSpinner from "@/components/GridSpinner";
import usePosts from "@/hooks/usePosts";

function PostList() {
  const { posts, isLoading: loading, error } = usePosts();

  return (
    <section>
      {loading && (
        <div className="mt-32 text-center">
          <GridSpinner />
        </div>
      )}
      <ul>
        {posts &&
          posts.map((post, index) => (
            <li key={post.id} className="mb-4">
              <PostListCard priority={index < 2} post={post} />
            </li>
          ))}
      </ul>
    </section>
  );
}
export default PostList;
