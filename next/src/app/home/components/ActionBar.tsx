import { parseDate } from "@/util/date";
import BookmarkIcon from "@/components/icons/BookmarkIcon";
import HeartIcon from "@/components/icons/HeartIcon";
import ToggleButton from "@/components/ui/ToggleButton";
import HeartFillIcon from "@/components/icons/HeartFillIcon";
import BookmarkFillIcon from "@/components/icons/BookmarkFillIcon";
import { Comment, SimplePost } from "@/model/post";
import usePosts from "@/hooks/usePosts";
import useMe from "@/hooks/useMe";
import CommentForm from "./CommentForm";

type Props = {
  post: SimplePost;
  children?: React.ReactNode;
  onComment: (comment: Comment) => void;
};

export default function ActionBar({ post, children, onComment }: Props) {
  const { id, likes, createdAt } = post;
  const { user, setBookmark } = useMe();
  const { setLike } = usePosts();

  const liked = user ? likes.includes(user.username) : false;
  const bookmarked = user?.bookmarks.includes(id) ?? false;

  const handleLike = (like: boolean) => {
    user && setLike(post, user.username, like);
  };
  const handleBookmark = (bookmarked: boolean) => {
    user && setBookmark(id, bookmarked);
  };
  const handleComment = (comment: string) => {
    user && onComment({ comment, username: user.username, image: user.image });
  };

  return (
    <>
      <div className="flex justify-between px-4 my-2">
        <ToggleButton
          onIcon={<HeartFillIcon />}
          offIcon={<HeartIcon />}
          toggled={liked}
          onToggle={handleLike}
          title={liked ? "unlike" : "like"}
        />
        <ToggleButton
          onIcon={<BookmarkFillIcon />}
          offIcon={<BookmarkIcon />}
          toggled={bookmarked}
          onToggle={handleBookmark}
          title={liked ? "unbookmark" : "bookmark"}
        />
      </div>
      <div className="mx-4">
        <p className="mb-2 text-sm font-bold">{`${likes?.length ?? 0} ${
          likes?.length > 1 ? "likes" : "like"
        }`}</p>
        {children}
        <p className="my-2 text-xs uppercase text-neutral-500">
          {parseDate(createdAt)}
        </p>
      </div>
      <CommentForm onPostComment={handleComment} />
    </>
  );
}
