import { ShieldCheck, Wrench, Code2, Cpu } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import { skillGroups } from "../data/skills.js";

const icons = { ShieldCheck, Wrench, Code2, Cpu };
const LEVELS = { Beginner: 1, Intermediate: 2, Proficient: 3 };

function Level({ level }) {
  const filled = LEVELS[level] || 1;
  return (
    <span className="flex items-center gap-2" title={`${level} level`}>
      <span className="flex gap-1" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span key={i} className={`h-1.5 w-3.5 rounded-full ${i < filled ? "bg-brand-gradient" : "bg-white/10"}`} />
        ))}
      </span>
      <span className="text-[11px] text-muted">{level}</span>
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section bg-surface/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="What I work with"
          title="Technical Skills"
          subtitle="Honest skill levels – always learning and improving."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, gi) => {
            const Icon = icons[group.icon] || ShieldCheck;
            return (
              <Reveal key={group.title} delay={(gi % 2) * 0.1}>
                <div className="glass h-full p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {group.skills.map((s) => (
                      <li
                        key={s.name}
                        className="flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5 transition hover:border-primary/40"
                      >
                        <span className="text-sm">{s.name}</span>
                        <Level level={s.level} />
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
