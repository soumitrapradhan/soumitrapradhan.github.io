import { Briefcase, CalendarDays, ExternalLink, MapPin } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import { experience } from "../data/experience.js";

function List({ title, items }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="mt-4">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-secondary">{title}</p>
      <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x max-w-4xl">
        <SectionHeading eyebrow="My journey" title="Work Experience" />
        <div className="relative space-y-8 border-l border-white/10 pl-8">
          {experience.map((e, i) => (
            <Reveal key={e.company + i}>
              <div className="relative">
                <span className="absolute -left-[41px] top-6 grid h-5 w-5 place-items-center rounded-full bg-bg ring-2 ring-primary">
                  <span className="h-2 w-2 rounded-full bg-brand-gradient" />
                </span>
                <div className="glass glass-hover p-6">
                  <div className="flex items-start gap-4">
                    {e.logo ? (
                      <img src={e.logo} alt={`${e.company} logo`} className="h-12 w-12 rounded-xl bg-white/10 object-contain p-1" />
                    ) : (
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-gradient text-black">
                        <Briefcase size={22} />
                      </span>
                    )}
                    <div>
                      <h3 className="font-display text-lg font-semibold">{e.title}</h3>
                      <p className="text-secondary">{e.company}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={14} /> {e.duration}
                      {e.length ? ` · ${e.length}` : ""}
                    </span>
                    {e.mode && (
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} /> {e.mode}
                      </span>
                    )}
                  </div>

                  {e.summary && <p className="mt-4 text-sm leading-relaxed text-muted">{e.summary}</p>}
                  <List title="Responsibilities" items={e.responsibilities} />
                  <List title="Tasks Completed" items={e.tasks} />
                  {e.skills?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {e.skills.map((s) => (
                        <span key={s} className="chip">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  {e.certificate && (
                    <a
                      href={e.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline mt-5 !py-2"
                    >
                      <ExternalLink size={16} /> View Certificate
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
