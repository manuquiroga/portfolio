export const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Contact",
    href: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "AIVENTURE",
    description: "'Choose Your Own Adventure' Story Generator powered by OpenAI.",
    tags: ["Angular", "AI", "Firebase"],
    imageUrl: "https://i.ibb.co/MMF8MFV/aiventure-portrait.png",
    link: "https://aiventure-62adf.firebaseapp.com",
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    tags: ["React", "TypeScript", "TailwindCSS"],
    imageUrl: "https://picsum.photos/1920/1080",
  },
  {
    title: "Sorting Visualizer",
    description: "Sorting algorithm visualizer with sound",
    tags: ["React", "JavaScript", "CSS"],
    imageUrl: "https://i.ibb.co/6HrcZDg/imagen-2023-11-27-162136514.png",
    link: "https://manuquiroga.github.io/sorting-visualizer/",
  },
  {
    title: "This Portfolio",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    imageUrl: "https://picsum.photos/1920/1080",
  },
] as const;

export const frontSkills = ["HTML", "CSS", "TailwindCSS", "React", "Next.js", "Angular"] as string[];

export const backSkills = ["Node.js", "Express", "MySQL", "MongoDB"] as string[];

export const languagesSkills = ["Java", "C", "JavaScript", "TypeScript"] as string[];

export const toolsSkills = ["Git", "Firebase"] as string[];
