// ------------------------------------------------------------
//  HOW TO ADD A BLOG POST
//  1. Copy one post object, paste it at the TOP of the list (newest first).
//  2. Give it a unique "slug" (lowercase-with-dashes) – it becomes the URL.
//  3. Write the article in "content" using these blocks:
//       { type: "h2", text: "Heading" }
//       { type: "p", text: "Paragraph" }
//       { type: "ul", items: ["one", "two"] }
//       { type: "code", text: "nmap -sV 10.10.10.10" }
//       { type: "quote", text: "..." }
//  image: optional featured image, e.g. "/blog/my-post.jpg" (put it in client/public/blog)
// ------------------------------------------------------------
export const blogCategories = [
  "All",
  "Ethical Hacking",
  "Web Application Security",
  "Network Security",
  "CTF Write-ups",
  "Cybersecurity Research",
  "Learning Experiences",
];

export const posts = [
  {
    slug: "my-cybersecurity-journey",
    title: "My Cybersecurity Journey: From Curiosity to Cybersecurity",
    category: "Learning Experiences",
    date: "2026-11-05",
    image: "",
    description:
      "How curiosity about hackers and secure systems turned into hands-on labs, CTFs and a goal of building a career in offensive security.",
    content: [
      {
        type: "p",
        text: "Every journey begins with curiosity, and mine started with a desire to understand how technology works, how systems are protected, and how hackers discover vulnerabilities.",
      },
      {
        type: "p",
        text: "My interest in cybersecurity grew when I started exploring the world of ethical hacking. I became fascinated by how attackers find security weaknesses and how cybersecurity professionals protect systems, networks, and digital information.",
      },

      { type: "h2", text: "My Biggest Inspiration" },
      {
        type: "p",
        text: "My biggest inspiration is my elder brother. His guidance, knowledge, and encouragement motivated me to explore cybersecurity and take my first steps into this field. He helped me understand that cybersecurity is not just about hacking; it's about continuous learning, problem-solving, and using technical knowledge responsibly.",
      },

      { type: "h2", text: "Attacks and Tools I Have Explored" },
      {
        type: "p",
        text: "As I learned more, I started connecting each type of attack with the tools used to study it, always in safe, authorised lab environments.",
      },
      {
        type: "ul",
        items: [
          "Reconnaissance and information gathering: Nmap, Shodan and Google Dorks, to see what is exposed about a target.",
          "Web security: the OWASP Top 10, Burp Suite, and SQL injection with SQLMap.",
          "Exploitation: understanding vulnerabilities such as EternalBlue using Metasploit in a TryHackMe lab.",
          "Network analysis: capturing and reading traffic with Wireshark.",
          "Wireless security: Aircrack-ng and Kismet.",
          "Social engineering awareness: learning how phishing works, including simulations with Gophish.",
          "Password security: Hydra and John the Ripper basics.",
        ],
      },

      { type: "h2", text: "How I Learn and Explore" },
      {
        type: "p",
        text: "I believe cybersecurity cannot be learned through theory alone. Practical experience, curiosity, and continuous exploration are equally important.",
      },
      { type: "p", text: "I regularly learn and explore cybersecurity through:" },
      {
        type: "ul",
        items: [
          "Hacker News: Keeping myself updated with cybersecurity developments, vulnerabilities, and technology trends.",
          "CTF Challenges: Practising problem-solving and developing practical security skills.",
          "YouTube: Learning ethical hacking concepts, tools, techniques, and real-world security scenarios.",
          "AI Tools: Asking questions, understanding complex concepts, exploring new topics, and strengthening my knowledge.",
          "Hands-on Labs: Practising through platforms like TryHackMe and Hack The Box.",
        ],
      },

      { type: "h2", text: "What Does Cybersecurity Mean to Me?" },
      {
        type: "p",
        text: "Cybersecurity is the practice of protecting computers, networks, applications, and digital information from unauthorized access, attacks, and threats.",
      },
      {
        type: "p",
        text: "To me, cybersecurity is more than just a technical field. It is a mindset built on curiosity, awareness, critical thinking, and continuous improvement.",
      },

      { type: "h2", text: "My Vision" },
      {
        type: "p",
        text: "My goal is to grow as a cybersecurity professional, especially in Offensive Security and Penetration Testing. I want to understand vulnerabilities from an attacker's perspective so I can help organizations identify security weaknesses and strengthen their defenses.",
      },
      { type: "p", text: "I'm still learning, exploring, experimenting, and challenging myself every day." },
      {
        type: "quote",
        text: "This is not the destination. This is just the beginning of my cybersecurity journey.",
      },
    ],
  },

  {
    slug: "how-i-started-with-git-and-github",
    title: "How I Started with Git and GitHub",
    category: "Learning Experiences",
    date: "2026-11-04",
    image: "",
    description:
      "Why I decided to learn Git and GitHub properly, what I practised, and how it changed the way I build and share my work.",
    content: [
      {
        type: "p",
        text: "Every cybersecurity learner eventually ends up with scripts, notes and small tools. Very soon you need a safe, organised place to keep them. For me, that place became Git and GitHub.",
      },

      { type: "h2", text: "Where It Started" },
      {
        type: "p",
        text: "While practising labs and CTFs and writing small Python scripts, I noticed how quickly my files turned into a mess of copies like final, final2 and final_new. I wanted a better way to track my work, go back when I broke something, and show my progress to others.",
      },
      {
        type: "p",
        text: "Version control was the answer, and GitHub is where developers and security researchers share their work with the world. So instead of copying commands blindly, I decided to learn Git and GitHub properly, step by step.",
      },

      { type: "h2", text: "What I Learned" },
      {
        type: "ul",
        items: [
          "Creating a repository and tracking changes with Git.",
          "Writing clear commit messages so every change tells a story.",
          "Pushing code to GitHub and keeping it in sync.",
          "Working with branches and fixing merge conflicts.",
          "Using GitHub to host and share projects, including this very portfolio.",
        ],
      },
      { type: "p", text: "The basic workflow I practised again and again:" },
      {
        type: "code",
        text: 'git init\ngit add .\ngit commit -m "Add first version"\ngit branch -M main\ngit remote add origin https://github.com/<your-username>/<repo>.git\ngit push -u origin main',
      },

      { type: "h2", text: "Why It Matters in Cybersecurity" },
      {
        type: "ul",
        items: [
          "Many of the best security tools are open source and live on GitHub, so reading and understanding their code is a real skill.",
          "Version control keeps scripts, notes and reports organised and safe from accidental loss.",
          "Clean repositories show recruiters how I work, think and improve over time.",
          "Collaboration, reviews and documentation are part of every real security team.",
        ],
      },

      { type: "h2", text: "Proof of Learning" },
      {
        type: "p",
        text: "To validate what I learned, I also completed a Git and GitHub certificate. Learning it properly, and not just watching tutorials, gives me confidence to build, track and share my projects in a professional way.",
      },

      { type: "h2", text: "What's Next" },
      {
        type: "p",
        text: "From here, my plan is simple: keep every project, lab note and write-up on GitHub, keep my commits clean, and grow my profile one repository at a time. Every commit is a small step in my cybersecurity journey.",
      },
    ],
  },
];
