"use client";

import { SWRConfig } from "swr";

type Props = {
  children: React.ReactNode;
};

// 브라우저(메모리)에 저장된 상태값은 client 컴포넌트에서 만 읽을 수 있다.
export default function SwrconfigContext({ children }: Props) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
}
