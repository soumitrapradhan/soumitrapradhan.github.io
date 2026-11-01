import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "../data/site.js";

export default function Social({ className = "" }) {
  const items = [
    { href: site.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: site.github, label: "GitHub", Icon: Github },
    { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
  ];
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={label === "Email" ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={label}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-muted transition hover:-translate-y-0.5 hover:border-primary/60 hover:text-white"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
