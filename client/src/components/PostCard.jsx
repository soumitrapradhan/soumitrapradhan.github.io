import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays } from "lucide-react";
import Thumb from "./Thumb.jsx";

export function formatDate(d) {
  return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export default function PostCard({ post }) {
  return (
    <article className="glass glass-hover flex h-full flex-col overflow-hidden">
      <Thumb src={post.image} alt={post.title} className="h-40" />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2 text-xs text-muted">
          <span className="chip !text-secondary">{post.category}</span>
          <span className="flex items-center gap-1">
            <CalendarDays size={12} /> {formatDate(post.date)}
          </span>
        </div>
        <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{post.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.description}</p>
        {post.sample && <p className="mt-2 text-[11px] text-amber-300/80">Sample post – replace with your own</p>}
        <Link to={`/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:gap-2.5">
          Read More <ArrowRight size={16} className="transition-all" />
        </Link>
      </div>
    </article>
  );
}
