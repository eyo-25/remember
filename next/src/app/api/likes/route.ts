import { dislikePost, likePost } from "@/service/posts";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { withSessionUser } from "@/util/session";
import { AuthUser } from "@/model/user";

export async function PUT(req: NextRequest) {
  return withSessionUser(async (user: AuthUser) => {
    const { id, like } = await req.json();

    if (!id || like == null) {
      return new Response("Bad Request", { status: 400 });
    }

    const request = like ? likePost : dislikePost;

    return request(id, user.id) //
      .then((res) => NextResponse.json(res))
      .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
  });
}
