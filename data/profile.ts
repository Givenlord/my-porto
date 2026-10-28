import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Given Lord",
  role: "First-year Informatics Engineering Student",
  intro:
    "I'm a first-year Informatics Engineering student at ITS who just started my journey in tech. I enjoy solving competitive programming problems in C/C++ and I'm currently learning robotics and web development.",
  aboutLead:
    "I'm Given, a first-year Informatics Engineering student at ITS Surabaya. I'm early in my journey, and this page is an honest snapshot of where I am right now.",
  about: [
    {
      label: "Background",
      text: "I study Informatics Engineering at Institut Teknologi Sepuluh Nopember (ITS). I'm at the very beginning of my journey in tech, and most of what's on this site I've picked up along the way.",
    },
    {
      label: "Competitive programming",
      text: "This is what I practice the most right now. I solve algorithm problems in C and C++, and I enjoy the puzzle of making a solution both correct and fast.",
    },
    {
      label: "Robotics & web",
      text: "I'm learning robot software development with ROS, starting from pathfinding. On the web side I'm learning Next.js, React and TypeScript, and this website is one of my first projects.",
    },
    {
      label: "How I learn",
      text: "I don't consider myself an expert in any of this yet. I prefer to learn step by step and build small things along the way, so I actually understand what I'm doing.",
    },
  ],
  photo: "/me.jpeg",
  focus: [
    {
      title: "Competitive Programming",
      description: "Solving algorithm problems in C and C++. I only discovered it in college, so I'm still a beginner.",
    },
    {
      title: "Robotics",
      description: "Learning robot software development with ROS, starting from pathfinding.",
    },
    {
      title: "Web Development",
      description: "Building websites with Next.js, React and TypeScript, like this one.",
    },
  ],
  location: "Surabaya, Indonesia",
  socials: [
    { label: "GitHub", href: "https://github.com/Givenlord", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/given-lord-040381286/", icon: "linkedin" },
    { label: "Email", href: "mailto:givensiregar858@gmail.com", icon: "email" },
  ],
};
