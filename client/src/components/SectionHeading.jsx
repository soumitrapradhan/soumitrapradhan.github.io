import Reveal from "./Reveal.jsx";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-secondary">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-gradient" />
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-muted">{subtitle}</p>}
    </Reveal>
  );
}
