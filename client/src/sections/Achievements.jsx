import { Trophy, Globe2, BadgeCheck, GraduationCap, Medal } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import { achievements } from "../data/achievements.js";

const icons = { Trophy, Globe2, BadgeCheck, GraduationCap, Medal };

export default function Achievements() {
  return (
    <section id="achievements" className="section bg-surface/40">
      <div className="container-x">
        <SectionHeading eyebrow="Milestones" title="Achievements" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => {
            const Icon = icons[a.icon] || Trophy;
            return (
              <Reveal key={a.title} delay={(i % 3) * 0.08}>
                <div className="glass glass-hover relative h-full overflow-hidden p-6">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
                  <div className="relative">
                    <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient shadow-glow">
                      <Icon size={22} />
                    </span>
                    <h3 className="font-display text-base font-semibold">{a.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{a.detail}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
