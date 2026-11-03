import { Camera, Gamepad2, Newspaper, Plane } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";

const hobbies = [
  {
    Icon: Camera,
    title: "Photography",
    text: "Capturing moments, exploring creative perspectives, and sharing my photographs.",
  },
  {
    Icon: Gamepad2,
    title: "Gaming",
    text: "Enjoying games that challenge my thinking, strategy, and creativity.",
  },
  {
    Icon: Newspaper,
    title: "Tech & Hacker News",
    text: "Staying updated with the latest technology, cybersecurity trends, and interesting tech stories through Hacker News.",
  },
  {
    Icon: Plane,
    title: "Traveling",
    text: "Exploring new places, experiencing different cultures, and discovering inspiration through new adventures.",
  },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Beyond the screen" title="Hobbies & Interests" />
        <Reveal>
          <p className="mx-auto mb-10 max-w-3xl text-center leading-relaxed text-muted">
            Beyond technology and cybersecurity, I enjoy exploring my creative and adventurous side. My interests include
            photography, gaming, reading Hacker News, and traveling.
          </p>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hobbies.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="glass glass-hover h-full p-6">
                <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient shadow-glow">
                  <Icon size={22} />
                </span>
                <h3 className="font-display text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
