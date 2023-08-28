import { SimplePost } from "@/model/post";
import Image from "next/image";
import PostUserAvatar from "@/components/PostUserAvatar";
import ActionBar from "./ActionBar";
import Avartar from "@/components/Avartar";
import useFullPost from "@/hooks/useFullPost";

type Props = {
  post: SimplePost;
};

export default function PostDetail({ post }: Props) {
  const { id, userImage, username, image } = post;
  const { post: data, postComments } = useFullPost(id);
  const comments = data?.comments;

  return (
    <section className="flex w-full h-full">
      <div className="relative basis-3/5">
        <Image
          className="object-cover"
          fill
          sizes="650px"
          src={image}
          alt={`photo by ${userImage}`}
          priority
        />
      </div>
      <div className="flex flex-col w-full basis-2/5">
        <PostUserAvatar username={username} image={userImage} />
        <ul className="h-full p-4 mb-4 overflow-y-auto border-t border-gray-200">
          {comments &&
            comments.map(
              ({ image, username: commentUsername, comment }, index) => (
                <li className="flex items-center mb-1" key={index}>
                  <Avartar
                    image={image}
                    size="small"
                    highlight={commentUsername === username}
                  />
                  <div className="ml-2">
                    <span className="mr-1 font-bold">{commentUsername}</span>
                    <span>{comment}</span>
                  </div>
                </li>
              )
            )}
        </ul>
        <ActionBar post={post} onComment={postComments} />
      </div>
    </section>
  );
}
