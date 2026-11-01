import { useRef, useState } from "react";
import { CheckCircle2, Github, Linkedin, Loader2, Mail, MapPin, Send, AlertCircle } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import { site } from "../data/site.js";
import { sendContact } from "../lib/api.js";

const empty = { name: "", email: "", subject: "", message: "", website: "" };

// Defined outside Contact so inputs keep focus while typing
function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState("idle"); // idle | sending | success | error
  const [serverMsg, setServerMsg] = useState("");
  const startedAt = useRef(Date.now());

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email address.";
    if (form.subject.trim().length < 3) e.subject = "Subject must be at least 3 characters.";
    if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setState("sending");
    try {
      await sendContact({ ...form, elapsed: Date.now() - startedAt.current });
      setState("success");
      setForm(empty);
    } catch (err) {
      setErrors(err.fields || {});
      setServerMsg(err.message === "Failed to fetch" ? "Could not reach the server. Please email me directly." : err.message);
      setState("error");
    }
  };

  const info = [
    { Icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { Icon: Linkedin, label: "LinkedIn", value: "soumitra-pradhan", href: site.linkedin },
    { Icon: Github, label: "GitHub", value: site.github.replace("https://", ""), href: site.github },
    { Icon: MapPin, label: "Location", value: site.location },
  ];

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Get in touch" title="Let's Connect" />
        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="space-y-6 lg:col-span-2">
            <p className="leading-relaxed text-muted">
              I'm always interested in connecting with cybersecurity professionals, recruiters, fellow learners, and
              technology enthusiasts.
            </p>
            <p className="leading-relaxed text-muted">
              Feel free to contact me regarding internship opportunities, collaborations, or cybersecurity discussions.
            </p>
            <ul className="space-y-3">
              {info.map(({ Icon, label, value, href }) => (
                <li key={label} className="glass flex items-center gap-4 p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-gradient">
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-muted">{label}</p>
                    {href ? (
                      <a href={href} target={label === "Email" ? undefined : "_blank"} rel="noopener noreferrer" className="block truncate text-sm hover:text-secondary">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <form onSubmit={submit} noValidate className="glass space-y-5 p-6 sm:p-8">
              {/* Honeypot: hidden from humans, bots fill it in */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Full Name" error={errors.name}>
                  <input id="name" className="input" placeholder="Your name" value={form.name} onChange={set("name")} maxLength={80} autoComplete="name" />
                </Field>
                <Field id="email" label="Email Address" error={errors.email}>
                  <input id="email" type="email" className="input" placeholder="you@example.com" value={form.email} onChange={set("email")} maxLength={120} autoComplete="email" />
                </Field>
              </div>
              <Field id="subject" label="Subject" error={errors.subject}>
                <input id="subject" className="input" placeholder="Internship opportunity" value={form.subject} onChange={set("subject")} maxLength={120} />
              </Field>
              <Field id="message" label="Message" error={errors.message}>
                <textarea id="message" rows={5} className="input resize-y" placeholder="Write your message..." value={form.message} onChange={set("message")} maxLength={2000} />
              </Field>

              <button type="submit" className="btn-primary w-full sm:w-auto" disabled={state === "sending"}>
                {state === "sending" ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                {state === "sending" ? "Sending..." : "Send Message"}
              </button>

              <div aria-live="polite">
                {state === "success" && (
                  <p className="flex items-center gap-2 text-sm text-emerald-300">
                    <CheckCircle2 size={18} /> Thank you! Your message has been sent.
                  </p>
                )}
                {state === "error" && (
                  <p className="flex items-center gap-2 text-sm text-red-400">
                    <AlertCircle size={18} /> {serverMsg}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
