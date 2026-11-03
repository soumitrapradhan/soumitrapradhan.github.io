import { Crosshair, BookOpen, Target } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";

const cards = [
  
  {
    Icon: Crosshair,
    title: "Career Interests",
    lines: ["Offensive Security", "Penetration Testing", "Web & Network Exploitation", "Red Teaming & CTFs"],
  },
  {
    Icon: BookOpen,
    title: "Current Learning",
    lines: ["Hands-on labs on TryHackMe", "CTF challenges on PicoCTF", "Cisco Networking Academy courses"],
  },
  {
    Icon: Target,
    title: "Professional Goals",
    lines: [
      "Begin a career in offensive security",
      "Contribute to real-world security assessments",
      "Help organizations improve their security posture",
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Who I am" title="About Me" />
        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="space-y-4 leading-relaxed text-muted lg:col-span-2">
            <p>
              I'm currently pursuing a B.Tech in Computer Science and Engineering (Cybersecurity) at Haldia Institute of
              Technology.
            </p>
            <p>
              I am passionate about offensive security, ethical hacking, vulnerability assessment, and penetration
              testing.
            </p>
            <p>
              I continuously explore cybersecurity concepts through practical labs, CTF challenges, and security learning
              platforms such as TryHackMe, Hack The Box, and Cisco Networking Academy.
            </p>
            <p>
              My objective is to develop strong technical skills and grow into a cybersecurity professional capable of
              identifying vulnerabilities and helping organizations improve their security posture.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
            {cards.map(({ Icon, title, lines }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="glass glass-hover h-full p-6">
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold">{title}</h3>
                  <ul className="space-y-1 text-sm text-muted">
                    {lines.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
