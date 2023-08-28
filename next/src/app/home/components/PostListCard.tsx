"use client";

import Avartar from "@/components/Avartar";
import { Comment, SimplePost } from "@/model/post";
import CommentForm from "./CommentForm";
import ActionBar from "./ActionBar";
import Image from "next/image";
import { useState } from "react";
import ModalPortal from "@/components/ModalPortal";
import PostModal from "@/components/PostModal";
import PostDetail from "./PostDetail";
import PostUserAvatar from "@/components/PostUserAvatar";
import usePosts from "@/hooks/usePosts";

type Props = {
  post: SimplePost;
  priority?: boolean;
};

function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, comments, text } = post;
  const [openModal, setOpenModal] = useState(false);
  const { postComments } = usePosts();

  const handlePostComment = (comment: Comment) => {
    postComments(post, comment);
  };

  return (
    <article className="border border-gray-200 rounded-lg shadow-md">
      <PostUserAvatar username={username} image={userImage} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image
        onClick={() => setOpenModal(true)}
        className="object-cover w-full aspect-square"
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
      />
      <ActionBar post={post} onComment={handlePostComment}>
        {text && (
          <p>
            <span className="mr-1 font-bold">{username}</span>
            {text}
          </p>
        )}
        {comments > 1 && (
          <button
            className="my-2 font-bold text-sky-500"
            onClick={() => setOpenModal(true)}
          >{`View all ${comments} comments`}</button>
        )}
      </ActionBar>
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </article>
  );
}

export default PostListCard;
