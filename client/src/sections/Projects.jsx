import { Github, ExternalLink, Lock } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import Thumb from "../components/Thumb.jsx";
import StatusBadge from "../components/StatusBadge.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="section bg-surface/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="What I'm building"
          title="Projects"
          subtitle="Status labels are always honest: Planned, In Progress or Completed."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => {
            const link = p.demo || p.repo;
            return (
              <Reveal key={p.name} delay={(i % 2) * 0.1}>
                <article className="glass glass-hover flex h-full flex-col overflow-hidden">
                  <Thumb src={p.image} alt={`${p.name} thumbnail`} />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                      <StatusBadge status={p.status} />
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {p.repo && (
                        <a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn-outline !py-2">
                          <Github size={16} /> GitHub
                        </a>
                      )}
                      {link ? (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2">
                          <ExternalLink size={16} /> View Project
                        </a>
                      ) : (
                        <span className="btn-outline cursor-not-allowed !py-2 opacity-60" aria-disabled="true">
                          <Lock size={16} /> {p.status === "Planned" ? "Coming Soon" : "Link Soon"}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
