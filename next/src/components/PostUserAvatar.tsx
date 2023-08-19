import Avartar from "./Avartar";

type Props = {
  image: string;
  username: string;
};

export default function PostUserAvatar({ image, username }: Props) {
  return (
    <div className="flex items-center p-2">
      <Avartar size="medium" image={image} highlight />
      <span className="ml-2 font-bold text-gray-900">{username}</span>
    </div>
  );
}
