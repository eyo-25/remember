import { getUserByUsername } from "@/service/user";
import { NextResponse } from "next/server";
import { withSessionUser } from "@/util/session";
import { AuthUser } from "@/model/user";

export async function GET() {
  return withSessionUser(async (user: AuthUser) => {
    return getUserByUsername(user.username).then((data) =>
      NextResponse.json(data)
    );
  });
}
