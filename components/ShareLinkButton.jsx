"use client";
import { LinkIcon } from "@heroicons/react/24/outline";

import { useState } from "react";

export default function ShareLinkButton() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  };
  //
  return (
    <button
      className="flex gap-1 items-center border px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700"
      onClick={handleClick}
    >
      <LinkIcon className="h-4 w-4" />
      {clicked ? "Link copied" : "Share link"}
    </button>
  );
}
