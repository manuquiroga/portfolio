export const profile = {
  name: "Manuel Quiroga",
  role: "Software Engineer",
  location: "Argentina",
  bio: "I build full-stack web products with TypeScript, Next.js and Postgres. Currently leading engineering at firma.de, a Y Combinator-backed platform for incorporating and running German companies.",
};

export const contact = [
  { label: "Email", text: "contact@manuquiroga.dev", href: "mailto:contact@manuquiroga.dev" },
  { label: "GitHub", text: "github.com/manuquiroga", href: "https://github.com/manuquiroga" },
  { label: "LinkedIn", text: "linkedin.com/in/manuquiroga", href: "https://linkedin.com/in/manuquiroga" },
];

export const experience = [
  {
    company: "firma.de",
    note: "YC-backed",
    role: "Lead Software Engineer",
    period: "2026 – Present",
    description: [
      "Platform for incorporating and running German companies, backed by Y Combinator; it raised a US$3.3M funding round in 2026. I lead engineering on the product and work on all of it: the web app, the iOS app, the database, background jobs and infrastructure.",
      "Most of my work goes into bookkeeping: importing invoices from Gmail, Outlook, WhatsApp and vendor portals, matching them against bank transactions, and the task and tax views built on top. I also built the iOS app with Expo and React Native, which shares types and business rules with the web app, and the MCP server that lets AI assistants read and book against a company's accounts.",
      "I am responsible for the app in production: centralized error reporting and analytics, rate limiting, end-to-end tests, and recurring security and reliability audits whose findings I track and fix.",
    ],
    stack: "TypeScript, Next.js, React Native (Expo), Supabase (Postgres), Trigger.dev, Stripe, PostHog",
  },
  {
    company: "Beglaubigt",
    note: "YC-backed",
    role: "Software Engineer",
    period: "2024 – 2026",
    description: [
      "Online notarization and company formation in Germany. I built customer-facing flows in the dashboard (company incorporation, GbR and holding setups, trade and tax registration, business address, document translation), including payments, document generation and signing.",
      "I also worked on the internal admin view the team uses to run cases (tasks, timeline, email, documents) and on the first accounting features.",
    ],
    stack: "TypeScript, Next.js, Supabase (Postgres), Stripe, Playwright",
  },
  {
    company: "Delet",
    note: "",
    role: "Frontend Developer",
    period: "2024",
    description: [
      "Built the company's marketing landing page in React, working from Figma designs together with their design team. Fully responsive, with animations done in Framer Motion.",
    ],
    stack: "React, Framer Motion",
  },
  {
    company: "Luz y Fuerza Mar del Plata Hotel",
    note: "",
    role: "Frontend Developer",
    period: "2024",
    description: [
      "Designed and built the hotel's website from scratch: the design, a responsive implementation in Next.js, and the deployment. I also managed the hosting and optimized code and media to keep page loads fast.",
    ],
    stack: "Next.js",
  },
];
