import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { createPost, getFollowingPostsOf } from "@/service/posts";
import { NextRequest } from "next/server";
import { withSessionUser } from "@/util/session";
import { AuthUser } from "@/model/user";

export async function GET() {
  return withSessionUser(async (user: AuthUser) => {
    return getFollowingPostsOf(user.username).then((data) =>
      NextResponse.json(data)
    );
  });
}

export async function POST(req: NextRequest) {
  return withSessionUser(async (user: AuthUser) => {
    const form = await req.formData();
    const text = form.get("text")?.toString();
    const file = form.get("file") as Blob;

    if (!text || !file) {
      return new Response("Bad Request", { status: 400 });
    }

    return createPost(user.id, text, file) //
      .then((data) => NextResponse.json(data));
  });
}
