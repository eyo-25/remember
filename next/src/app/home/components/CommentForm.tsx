"use client";

import SmileIcon from "@/components/icons/SmileIcon";
import { FormEvent, useState } from "react";

type Props = {
  onPostComment: (comment: string) => void;
};

export default function CommentForm({ onPostComment }: Props) {
  const [comment, setComment] = useState("");
  const buttonDisable = comment.length === 0;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment === "") return;
    onPostComment(comment);
    setComment("");
  };

  const buttonClass = `ml-2 font-bold ${
    buttonDisable ? "text-sky-300" : "text-sky-500"
  }`;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center px-3 border-t border-neutral-300"
    >
      <SmileIcon />
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-3 ml-2 border-none outline-none"
        type="text"
        placeholder="Add a comment..."
        required
      />
      <button disabled={buttonDisable} type="submit" className={buttonClass}>
        Post
      </button>
    </form>
  );
}
