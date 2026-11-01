import { site } from "../data/site.js";
import Social from "./Social.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface/60">
      <div className="container-x flex flex-col items-center gap-5 py-10 text-center">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient font-display font-bold shadow-glow">
          {site.initials}
        </span>
        <div>
          <p className="font-display text-lg font-semibold">{site.name}</p>
          <p className="text-sm text-muted">{site.tagline}</p>
          <p className="mt-1 text-sm italic text-muted/80">{site.motto}</p>
        </div>
        <Social />
        <p className="text-xs text-muted/70">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
