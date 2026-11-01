// Platforms shown as cards. status: "Active" | "Planned" | "Completed"
export const platforms = [
  {
    name: "TryHackMe",
    status: "Active",
    detail: "86 completed rooms, Gold League winner, 14 badges.",
    link: "https://tryhackme.com/p/Shadowsoumitra",
  },
  { name: "Hack The Box", status: "Planned", detail: "Next platform to explore.", link: "" },
  { name: "PicoCTF", status: "Active", detail: "CTF challenges for practical skills.", link: "" },
  { name: "OverTheWire Bandit", status: "Planned", detail: "Linux command-line wargames.", link: "" },
  {
    name: "PortSwigger Web Security Academy",
    status: "Planned",
    detail: "Web application security labs.",
    link: "",
  },
];

// Add your own challenges here. One object per challenge/room.
// difficulty: "Easy" | "Medium" | "Hard" | "" ; status: "Completed" | "In Progress" | "Planned"
export const challenges = [
  {
    name: "Blue (EternalBlue)",
    platform: "TryHackMe",
    difficulty: "",
    skills: ["Metasploit", "Exploitation"],
    status: "Completed",
    writeup: "",
  },
  {
    name: "OWASP Top 10",
    platform: "TryHackMe",
    difficulty: "",
    skills: ["Web Security"],
    status: "Completed",
    writeup: "",
  },
  {
    name: "SQLMap",
    platform: "TryHackMe",
    difficulty: "",
    skills: ["SQL Injection", "SQLMap"],
    status: "Completed",
    writeup: "",
  },
  {
    name: "FlareVM",
    platform: "TryHackMe",
    difficulty: "",
    skills: ["Malware Analysis Tooling"],
    status: "Completed",
    writeup: "",
  },
];
