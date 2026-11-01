import { ShieldCheck } from "lucide-react";

// Shows an image if provided, otherwise a clean gradient placeholder you can replace later.
export default function Thumb({ src, alt, icon: Icon = ShieldCheck, className = "h-44" }) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" className={`w-full object-cover ${className}`} />;
  }
  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden bg-surface ${className}`}
      aria-label={`${alt} placeholder`}
    >
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-secondary/30 blur-3xl" />
      <Icon className="relative h-10 w-10 text-white/70" strokeWidth={1.5} />
    </div>
  );
}
