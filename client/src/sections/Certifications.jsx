import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import Thumb from "../components/Thumb.jsx";
import { certifications } from "../data/certifications.js";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Proof of learning" title="Certifications" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.title + c.issuer} delay={(i % 3) * 0.08}>
              <article className="glass glass-hover flex h-full flex-col overflow-hidden">
                <Thumb src={c.image} alt={`${c.title} certificate`} icon={Award} className="h-40" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-semibold leading-snug">{c.title}</h3>
                  <p className="mt-1 text-sm text-secondary">{c.issuer}</p>
                  {c.date && <p className="mt-1 text-xs text-muted">Completed: {c.date}</p>}
                  {c.note && <p className="mt-1 text-xs text-muted">{c.note}</p>}
                  <div className="mt-auto pt-4">
                    {c.verifyUrl ? (
                      <a href={c.verifyUrl} target="_blank" rel="noopener noreferrer" className="btn-outline w-full !py-2">
                        <ExternalLink size={16} /> View Certificate
                      </a>
                    ) : (
                      <span className="btn-outline w-full cursor-not-allowed !py-2 opacity-50">Link coming soon</span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
