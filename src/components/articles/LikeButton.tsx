"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  return (
    <button
      onClick={() => setLiked(!liked)}
      className="flex items-center gap-2 rounded-xl
                    border border-white/10 px-4 py-3 transition hover:bg-white/5"
    >
      <Heart
        size={20}
        className={liked ? "fill-red-500 text-red-500" : "text-slate-400"}
      />

      <span>{liked ? "پسندیدم" : "پسندیدن"}</span>
    </button>
  );
}
