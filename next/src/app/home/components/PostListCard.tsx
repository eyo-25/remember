"use client";

import Avartar from "@/components/Avartar";
import { SimplePost } from "@/model/post";
import CommentForm from "./CommentForm";
import ActionBar from "./ActionBar";
import Image from "next/image";
import { useState } from "react";
import ModalPortal from "@/components/ModalPortal";
import PostModal from "@/components/PostModal";
import PostDetail from "./PostDetail";
import PostUserAvatar from "@/components/PostUserAvatar";

type Props = {
  post: SimplePost;
  priority?: boolean;
};

function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;
  const [openModal, setOpenModal] = useState(false);

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
      <ActionBar
        likes={likes}
        text={text}
        username={username}
        createdAt={createdAt}
      />
      <CommentForm />
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
