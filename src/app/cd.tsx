import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { TourContextProvider } from "@/components/TourContext";

const inter = Inter({ subsets: ["latin"] });

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
  title: "Jorge Iván García Torres - Backend Developer",
  description: "Backend and Full Stack Developer especializado en Java, Spring Boot y arquitectura de software. Explora mis proyectos, habilidades y certificaciones.",
  keywords: ["Jorge García", "Backend Developer", "Java", "Spring Boot", "Full Stack", "Portfolio", "Systems Engineering"],
  authors: [{ name: "Jorge Iván García Torres" }],
  creator: "Jorge Iván García Torres",
  metadataBase: new URL('https://portafolio-react-next-eight.vercel.app/'), // Usando tu subdominio de Vercel
  openGraph: {
    title: "Jorge Iván García Torres - Backend Developer",
    description: "Backend and Full Stack Developer especializado en Java, Spring Boot y arquitectura de software.",
    url: "https://portafolio-react-next-eight.vercel.app/",
    siteName: "Jorge García Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jorge García - Backend Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jorge Iván García Torres - Backend Developer",
    description: "Backend and Full Stack Developer especializado en Java, Spring Boot y arquitectura de software.",
    creator: "@Jgarcia108",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true, 
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-zinc-900 dark:text-white`}
      >
        <TourContextProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </TourContextProvider>
      </body>
    </html>
  );
}
