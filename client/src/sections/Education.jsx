import { CalendarDays, GraduationCap, MapPin } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import StatusBadge from "../components/StatusBadge.jsx";
import { education } from "../data/education.js";

export default function Education() {
  return (
    <section id="education" className="section bg-surface/40">
      <div className="container-x max-w-4xl">
        <SectionHeading eyebrow="Academic background" title="Education" />
        <div className="space-y-5">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.08}>
              <div className="glass glass-hover flex gap-4 p-5 sm:p-6">
                {e.logo ? (
                  <img
                    src={e.logo}
                    alt={`${e.school} logo`}
                    className="h-14 w-14 shrink-0 rounded-xl bg-white object-contain p-1"
                  />
                ) : (
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-gradient">
                    <GraduationCap size={26} />
                  </span>
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold leading-snug">
                      {e.school}
                      <span className="font-normal text-muted">, {e.location}</span>
                    </h3>
                    <StatusBadge status={e.status === "Pursuing" ? "In Progress" : e.status} />
                  </div>
                  <p className="mt-1 text-secondary">{e.degree}</p>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
                    <CalendarDays size={14} /> {e.start} – {e.end}
                  </p>
                  {(e.grade || e.percentage) && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {e.grade && <span className="chip">Grade: {e.grade}</span>}
                      {e.percentage && <span className="chip">Marks: {e.percentage}</span>}
                    </div>
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
