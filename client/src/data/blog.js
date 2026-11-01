// ------------------------------------------------------------
//  HOW TO ADD A BLOG POST
//  1. Copy one post object, paste it at the TOP of the list.
//  2. Give it a unique "slug" (lowercase-with-dashes) – it becomes the URL.
//  3. Write the article in "content" using these blocks:
//       { type: "h2", text: "Heading" }
//       { type: "p", text: "Paragraph" }
//       { type: "ul", items: ["one", "two"] }
//       { type: "code", text: "nmap -sV 10.10.10.10" }
//       { type: "quote", text: "..." }
//  4. Delete the two starter posts (sample: true) when you have your own.
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
    slug: "my-cybersecurity-learning-path",
    sample: true,
    title: "My Cybersecurity Learning Path",
    category: "Learning Experiences",
    date: "2026-10-31",
    image: "",
    description:
      "How I combine TryHackMe, PicoCTF and Cisco Networking Academy to build practical security skills step by step.",
    content: [
      {
        type: "p",
        text: "This is a starter post. Replace it with your own story: why you chose cybersecurity, what you learned from TryHackMe and Cisco Networking Academy, and what you want to learn next.",
      },
      { type: "h2", text: "Suggested outline" },
      {
        type: "ul",
        items: [
          "Where I started (Pre Security and Cyber Security 101)",
          "What hands-on labs taught me",
          "Mistakes I made and how I fixed them",
          "My next goals",
        ],
      },
    ],
  },
  {
    slug: "ctf-writeup-template",
    sample: true,
    title: "CTF Write-up Template",
    category: "CTF Write-ups",
    date: "2026-10-30",
    image: "",
    description:
      "A simple structure you can reuse for every CTF or lab write-up: recon, exploitation, lessons learned.",
    content: [
      { type: "p", text: "Use this layout for each write-up you publish. Only write about challenges you are allowed to share." },
      { type: "h2", text: "1. Overview" },
      { type: "p", text: "Platform, challenge name, difficulty and the skill being tested." },
      { type: "h2", text: "2. Reconnaissance" },
      { type: "code", text: "nmap -sV -sC <target-ip>" },
      { type: "h2", text: "3. Exploitation & Findings" },
      { type: "p", text: "Explain what you tried, what worked, and why it worked." },
      { type: "h2", text: "4. Lessons Learned" },
      { type: "ul", items: ["What I would do differently", "How a defender could prevent this"] },
    ],
  },
];
