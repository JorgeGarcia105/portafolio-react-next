import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jorge Iván | Portfolio",
  description: "Backend and Full Stack Developer showcasing projects and certificates.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-zinc-900 dark:text-white`}
      >
        <header className="sticky top-0 z-20 w-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md shadow-sm">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-xl font-bold tracking-tight">Jorge Iván</div>
            <div className="flex gap-6 font-medium text-base">
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
              <Link href="/about" className="hover:text-blue-600 transition">About</Link>
              <Link href="/projects" className="hover:text-blue-600 transition">Projects</Link>
              <Link href="/skills" className="hover:text-blue-600 transition">Skills</Link>
              <Link href="/certificates" className="hover:text-blue-600 transition">Certificates</Link>
              <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
            </div>
          </nav>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-10">{children}</main>

        <footer className="mt-20 border-t pt-6 pb-10 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Jorge Iván García Torres. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
