import { User } from "@/model/user";
import Avartar from "./Avartar";

type Props = {
  user: User;
};

function SideBar({ user: { name, username, image } }: Props) {
  return (
    <>
      <div className="flex items-center">
        {image && <Avartar image={image} />}
        <div className="ml-4">
          <p className="font-bold">{username}</p>
          <p className="text-lg leading-4 text-neutral-500">{name}</p>
        </div>
      </div>
      <p className="mt-8 text-sm text-neutral-500">
        About • Help • API • Privacy • Language
      </p>
      <p className="mt-8 text-sm font-bold text-neutral-500 ">
        @Copyright Remember from EYO
      </p>
    </>
  );
}
export default SideBar;
