import { FullPost, SimplePost } from "@/model/post";
import useSWR from "swr";
import Image from "next/image";
import PostUserAvatar from "@/components/PostUserAvatar";
import ActionBar from "./ActionBar";
import CommentForm from "./CommentForm";
import Avartar from "@/components/Avartar";

type Props = {
  post: SimplePost;
};

export default function PostDetail({ post }: Props) {
  const { id, userImage, username, image, createdAt, likes } = post;
  const { data } = useSWR<FullPost>(`/api/posts/${id}`);
  const comments = data?.comments;
  console.log(comments);
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
        <ActionBar likes={likes} username={username} createdAt={createdAt} />
        <CommentForm />
      </div>
    </section>
  );
}
