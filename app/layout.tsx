import "./globals.css";
import ContextProvider from "@/context/active-section-context";
import Header from "@/components/header";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";

export const metadata = {
  title: "Manuel Quiroga - Portfolio",
  description: "Manuel Quiroga | Software Developer | Jr Front-end Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`bg-[#0b0b0b] px-12 sm:px-0`}>
        <main className="max-w-2xl mx-auto">
          <ContextProvider>
            <Header></Header>
            {children}
            <Footer></Footer>
            <Toaster position="top-right" />
          </ContextProvider>
        </main>
      </body>
    </html>
  );
}
