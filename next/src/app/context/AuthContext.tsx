"use client";

import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

// 브라우저(메모리)에 저장된 상태값은 client 컴포넌트에서 만 읽을 수 있다.
export default function AuthContext({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
