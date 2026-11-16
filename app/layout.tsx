import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manuel Quiroga",
  description: "Software engineer. Full-stack web products with TypeScript, Next.js and Postgres.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
