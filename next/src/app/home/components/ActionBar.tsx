import { parseDate } from "@/util/date";
import BookmarkIcon from "@/components/icons/BookmarkIcon";
import HeartIcon from "@/components/icons/HeartIcon";
import { useState } from "react";
import ToggleButton from "@/components/ui/ToggleButton";
import HeartFillIcon from "@/components/icons/HeartFillIcon";
import BookmarkFillIcon from "@/components/icons/BookmarkFillIcon";
import { SimplePost } from "@/model/post";
import { useSession } from "next-auth/react";
import usePosts from "@/hooks/usePosts";

type Props = {
  post: SimplePost;
};

export default function ActionBar({ post }: Props) {
  const { id, likes, username, text, createdAt } = post;
  const { data: session } = useSession();
  const user = session?.user;
  const liked = user ? likes.includes(user.username) : false;
  const [bookmarked, setBookmarked] = useState(false);
  const { setLike } = usePosts();
  const handleLike = (like: boolean) => {
    if (user) {
      setLike(post, user.username, like);
    }
  };

  return (
    <>
      <div className="flex justify-between px-4 my-2">
        <ToggleButton
          onIcon={<HeartFillIcon />}
          offIcon={<HeartIcon />}
          toggled={liked}
          onToggle={handleLike}
        />
        <ToggleButton
          onIcon={<BookmarkFillIcon />}
          offIcon={<BookmarkIcon />}
          toggled={bookmarked}
          onToggle={setBookmarked}
        />
      </div>
      <div className="mx-4">
        <p className="mb-2 text-sm font-bold">{`${likes?.length ?? 0} ${
          likes?.length > 1 ? "likes" : "like"
        }`}</p>
        {text && (
          <p>
            <span className="mr-1 font-bold">{username}</span>
            {text}
          </p>
        )}
        <p className="my-2 text-xs uppercase text-neutral-500">
          {parseDate(createdAt)}
        </p>
      </div>
    </>
  );
}
