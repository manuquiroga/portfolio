import './globals.css'
import { Montserrat } from 'next/font/google';
import ContextProvider from "@/context/active-section-context";
import Header from '@/components/header';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
const monserrat = Montserrat({
  weight: ["400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Manuel Quiroga",
  description: "Manuel Quiroga | Full-stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${monserrat.className} bg-[#0b0b0b]`}>
        <ContextProvider>
          <Header></Header>
          {children}
          <Footer></Footer>
          <Toaster position="top-right"/>
        </ContextProvider>
      </body>
    </html>
  );
}
