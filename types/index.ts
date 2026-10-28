export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  year: number;
  repoUrl?: string;
  liveUrl?: string;
  // path gambar di public/, contoh "/projects/bfs.png"
  image?: string;
  featured?: boolean;
};

export type SkillCategory = "Language" | "Framework & Tools" | "Robotics";

export type Skill = {
  name: string;
  category: SkillCategory;
};

export type SocialIconName = "github" | "linkedin" | "email";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIconName;
};

export type Focus = {
  title: string;
  description: string;
};

export type AboutBlock = {
  label: string;
  text: string;
};

export type Profile = {
  name: string;
  role: string;
  intro: string;
  aboutLead: string;
  about: AboutBlock[];
  // path foto di public/, contoh "/me.jpg". Kosong = tampil inisial
  photo?: string;
  focus: Focus[];
  location: string;
  socials: SocialLink[];
};
