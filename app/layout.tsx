import "./globals.css";
import ContextProvider from "@/context/active-section-context";
import Header from "@/components/header";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Manuel Quiroga - Portfolio",
  description: "Software Developer | Front-end Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`bg-[#0b0b0b] px-12 sm:px-0`}>
        <Analytics />
        <main className="max-w-2xl mx-auto">
          <ContextProvider>
            <Header></Header>
            {children}
            <Footer></Footer>
          </ContextProvider>
        </main>
      </body>
    </html>
  );
}
