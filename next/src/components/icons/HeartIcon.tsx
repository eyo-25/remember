import { AiOutlineHeart } from "react-icons/ai";

type Props = {
  style?: string;
};

export default function HeartIcon({ style }: Props) {
  return <AiOutlineHeart className={`${style} || w-7 h-7`} />;
}
