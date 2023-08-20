import { RiBookmarkLine } from "react-icons/ri";

type Props = {
  style?: string;
};

export default function BookmarkIcon({ style }: Props) {
  return <RiBookmarkLine className={`${style} || w-6 h-6`} />;
}
