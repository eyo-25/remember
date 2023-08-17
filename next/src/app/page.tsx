import SideBar from "@/components/SideBar";
import FollowingBar from "./home/components/FollowingBar";
import PostList from "./home/components/PostList";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <article className="mx-auto flex max-w-[850px] p-4 flex-col justify-between w-full md:flex-row">
      <section className="flex flex-col w-full min-w-0 basis-3/4">
        <FollowingBar />
        <PostList />
      </section>
      <section className="ml-8 basis-1/4">
        <SideBar user={user} />
      </section>
    </article>
  );
}
