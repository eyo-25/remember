"use client";

import { SimplePost } from "@/model/post";
import Image from "next/image";
import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import ModalPortal from "./ModalPortal";
import PostModal from "./PostModal";
import PostDetail from "@/app/home/components/PostDetail";

type Props = {
  post: SimplePost;
  priority: boolean;
};

export default function PostGridCard({ post, priority = false }: Props) {
  const { image, username } = post;
  const [openModal, setOpenModal] = useState(false);
  const { data: session } = useSession();
  const handleOpenPost = () => {
    if (!session?.user) {
      return signIn();
    }
    setOpenModal(true);
  };

  return (
    <div className="flex">
      <div className="relative w-full aspect-square">
        <Image
          onClick={handleOpenPost}
          className="object-cover"
          src={image}
          alt={`photo by ${username}`}
          fill
          priority={priority}
        />
      </div>
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </div>
  );
}
