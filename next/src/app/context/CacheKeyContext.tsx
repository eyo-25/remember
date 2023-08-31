import { createContext, useContext } from "react";

type CashKeysValue = {
  postsKey: string;
};

export const CacheKeyContext = createContext<CashKeysValue>({
  postsKey: "/api/posts",
});

export const useCashKeys = () => useContext(CacheKeyContext);
