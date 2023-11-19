import Header from '@/components/header';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-white-50 relative`}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
