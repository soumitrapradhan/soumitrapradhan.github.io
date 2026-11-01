import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = ref.current;
    const ctx = c.getContext("2d");
    const size = 16;
    let w, h, drops;
    const resize = () => {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
      drops = Array.from({ length: Math.floor(w / size) }, () => Math.random() * (h / size));
    };
    resize();
    window.addEventListener("resize", resize);
    const id = setInterval(() => {
      ctx.fillStyle = "rgba(2,8,4,0.08)";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "#00ff66";
      ctx.font = `${size}px monospace`;
      drops.forEach((y, i) => {
        ctx.fillText(Math.random() > 0.5 ? "1" : "0", i * size, y * size);
        drops[i] = y * size > h && Math.random() > 0.975 ? 0 : y + 1;
      });
    }, 60);
    return () => {
      clearInterval(id);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 opacity-20" />;
}
