import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import PostCard from "../components/PostCard.jsx";
import { posts } from "../data/blog.js";

export default function Blog() {
  const latest = posts.slice(0, 3);
  return (
    <section id="blog" className="section bg-surface/40">
      <div className="container-x">
        <SectionHeading eyebrow="Write-ups & notes" title="Blog" subtitle="Cybersecurity learnings, write-ups and research." />
        {latest.length === 0 ? (
          <p className="text-center text-muted">New articles are coming soon.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        )}
        <div className="mt-10 text-center">
          <Link to="/blog" className="btn-outline">
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
