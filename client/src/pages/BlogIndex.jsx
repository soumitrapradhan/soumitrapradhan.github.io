import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PostCard from "../components/PostCard.jsx";
import { posts, blogCategories } from "../data/blog.js";

export default function BlogIndex() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? posts : posts.filter((p) => p.category === cat);

  return (
    <section className="container-x min-h-screen pb-20 pt-28">
      <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm text-muted hover:text-white">
        <ArrowLeft size={16} /> Back to portfolio
      </Link>
      <h1 className="font-display text-3xl font-bold sm:text-4xl">
        Blog & <span className="text-gradient">Write-ups</span>
      </h1>

      <div className="mt-6 flex flex-wrap gap-2">
        {blogCategories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              cat === c ? "border-transparent bg-brand-gradient text-white" : "border-white/10 text-muted hover:text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="mt-12 text-muted">No articles in this category yet.</p>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      )}
    </section>
  );
}
