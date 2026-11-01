import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navLinks, site } from "../data/site.js";
import { scrollToSection } from "../lib/scroll.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (pathname !== "/") return;
      let current = "home";
      for (const l of navLinks) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 120) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const go = (id) => {
    setOpen(false);
    scrollToSection(id, navigate, pathname);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-white/10 bg-bg/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Main navigation">
        <button onClick={() => go("home")} className="flex items-center gap-2" aria-label="Go to top">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient font-display text-sm font-bold shadow-glow">
            {site.initials}
          </span>
          <span className="hidden font-display text-sm font-semibold sm:block">{site.name}</span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`rounded-lg px-3 py-2 text-sm transition ${
                  active === l.id && pathname === "/" ? "text-white" : "text-muted hover:text-white"
                }`}
              >
                {l.label}
                {active === l.id && pathname === "/" && (
                  <motion.span layoutId="nav-underline" className="mx-auto mt-1 block h-0.5 w-5 rounded-full bg-brand-gradient" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={site.resume} download className="btn-primary hidden !px-4 !py-2 sm:inline-flex">
            <Download size={16} /> Resume
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 pb-5">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="w-full rounded-xl px-4 py-3 text-left text-sm text-muted hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <a href={site.resume} download className="btn-primary mt-2 w-full">
                  <Download size={16} /> Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
