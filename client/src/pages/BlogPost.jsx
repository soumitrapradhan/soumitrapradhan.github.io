import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { posts } from "../data/blog.js";
import { formatDate } from "../components/PostCard.jsx";

function Block({ b }) {
  switch (b.type) {
    case "h2":
      return <h2 className="mt-8 font-display text-2xl font-semibold">{b.text}</h2>;
    case "ul":
      return (
        <ul className="list-disc space-y-1 pl-6 text-muted">
          {b.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      );
    case "code":
      return (
        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-surface p-4 text-sm text-secondary">
          <code>{b.text}</code>
        </pre>
      );
    case "quote":
      return <blockquote className="border-l-4 border-primary pl-4 italic text-muted">{b.text}</blockquote>;
    default:
      return <p className="leading-relaxed text-muted">{b.text}</p>;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) document.title = `${post.title} | Soumitra Pradhan`;
    return () => {
      document.title = "Soumitra Pradhan | Cybersecurity Student & Aspiring Ethical Hacker";
    };
  }, [post]);

  if (!post) {
    return (
      <section className="container-x min-h-screen pt-32 text-center">
        <h1 className="font-display text-3xl font-bold">Article not found</h1>
        <Link to="/blog" className="btn-primary mt-6">
          Back to blog
        </Link>
      </section>
    );
  }

  return (
    <article className="container-x max-w-3xl pb-20 pt-28">
      <Link to="/blog" className="mb-6 inline-flex items-center gap-2 text-sm text-muted hover:text-white">
        <ArrowLeft size={16} /> All articles
      </Link>
      <span className="chip !text-secondary">{post.category}</span>
      <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">{post.title}</h1>
      <p className="mt-3 flex items-center gap-2 text-sm text-muted">
        <CalendarDays size={14} /> {formatDate(post.date)} · Soumitra Pradhan
      </p>
      {post.image && <img src={post.image} alt={post.title} className="mt-6 w-full rounded-2xl" />}
      <div className="mt-8 space-y-4">
        {post.content.map((b, i) => (
          <Block key={i} b={b} />
        ))}
      </div>
    </article>
  );
}
