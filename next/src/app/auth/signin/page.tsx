import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import SignIn from "@/components/SignIn";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signin",
  description: "지금 Remember에 가입해서 기억을 공유해 보세요",
};

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SignInPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  const providers = await getProviders();

  return providers ? (
    <SignIn providers={providers} callbackUrl={callbackUrl ?? "/"} />
  ) : (
    redirect("/")
  );
}
