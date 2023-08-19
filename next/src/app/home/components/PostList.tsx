"use client";

import { SimplePost } from "@/model/post";
import useSWR from "swr";
import PostListCard from "./PostListCard";
import GridSpinner from "@/components/GridSpinner";

function PostList() {
  const {
    data: posts,
    isLoading: loading,
    error,
  } = useSWR<SimplePost[]>("/api/posts");

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
