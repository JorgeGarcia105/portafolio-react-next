import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jorge Iván | Portfolio",
  description: "Backend and Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-800`}
      >
        <header className="p-4 shadow-md sticky top-0 bg-white z-10">
          <nav className="flex gap-6 font-semibold text-lg">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/certificates">Certificates</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
