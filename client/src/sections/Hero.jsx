import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, FolderGit2, Send } from "lucide-react";
import { site } from "../data/site.js";
import { scrollToSection } from "../lib/scroll.js";
import Social from "../components/Social.jsx";

export default function Hero() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const go = (id) => scrollToSection(id, navigate, pathname);

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-24 pb-16">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Hello, I'm</p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">{site.name}</span>
          </h1>
          <h2 className="mt-3 font-display text-xl font-medium text-white/90 sm:text-2xl">{site.headline}</h2>

          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            I'm a Cybersecurity student passionate about ethical hacking, penetration testing, and digital security. I
            enjoy exploring vulnerabilities, understanding attacker techniques, and learning how to strengthen systems
            against cyber threats.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            Through hands-on cybersecurity labs, CTF challenges, and industry learning platforms, I'm continuously
            developing my practical security skills.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => go("projects")} className="btn-primary">
              <FolderGit2 size={18} /> View My Projects
            </button>
            <a href={site.resume} download className="btn-outline">
              <Download size={18} /> Download Resume
            </a>
            <button onClick={() => go("contact")} className="btn-outline">
              <Send size={18} /> Contact Me
            </button>
          </div>

          <Social className="mt-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-brand-gradient opacity-30 blur-3xl" />
            <div className="relative rounded-full bg-brand-gradient p-[5px] shadow-glow">
              <img
                src={site.photo}
                alt="Portrait of Soumitra Pradhan"
                width="420"
                height="420"
                fetchpriority="high"
                className="h-60 w-60 rounded-full border-4 border-bg object-cover sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
