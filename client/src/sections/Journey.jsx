import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink, Route } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import StatusBadge from "../components/StatusBadge.jsx";
import { platforms, challenges } from "../data/journey.js";

export default function Journey() {
  const [open, setOpen] = useState(false);

  return (
    <section id="journey" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Practical learning"
          title="Hands-on Cybersecurity Journey"
          subtitle="Labs, CTFs and wargames where I practise real security skills."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <div className="glass glass-hover h-full p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-semibold">{p.name}</h3>
                  <StatusBadge status={p.status} />
                </div>
                <p className="mt-2 text-sm text-muted">{p.detail}</p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm text-secondary hover:underline"
                  >
                    View profile <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button onClick={() => setOpen(!open)} className="btn-primary" aria-expanded={open}>
            <Route size={18} /> {open ? "Hide Learning Journey" : "View Learning Journey"}
            <ChevronDown size={16} className={`transition ${open ? "rotate-180" : ""}`} />
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="glass mt-8 overflow-x-auto">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead className="border-b border-white/10 text-xs uppercase tracking-wider text-muted">
                    <tr>
                      {["Challenge", "Platform", "Difficulty", "Skills learned", "Status", "Write-up"].map((h) => (
                        <th key={h} className="px-4 py-3 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {challenges.map((c) => (
                      <tr key={c.name + c.platform} className="border-b border-white/5 last:border-0">
                        <td className="px-4 py-3 font-medium">{c.name}</td>
                        <td className="px-4 py-3 text-muted">{c.platform}</td>
                        <td className="px-4 py-3 text-muted">{c.difficulty || "—"}</td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap gap-1.5">
                            {c.skills.map((s) => (
                              <span key={s} className="chip">
                                {s}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <StatusBadge status={c.status} />
                        </td>
                        <td className="px-4 py-3">
                          {c.writeup ? (
                            <a href={c.writeup} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                              Read
                            </a>
                          ) : (
                            <span className="text-muted">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
