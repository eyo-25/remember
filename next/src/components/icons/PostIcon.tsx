import React from "react";
import { MdGridOn } from "react-icons/md";

type Props = {
  style?: string;
};

export default function PostIcon({ style }: Props) {
  return <MdGridOn className={`${style} || w-6 h-6`} />;
}
