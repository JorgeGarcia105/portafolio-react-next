import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Skip to main content para accesibilidad */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Skip to main content
          </a>

          <header className="sticky top-0 z-20 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm border-b border-zinc-200/50 dark:border-zinc-700/50">
            <Navigation />
          </header>

          <main id="main-content" className="min-h-screen">
            {children}
          </main>

          <footer className="bg-zinc-50 dark:bg-zinc-800 border-t border-zinc-200 dark:border-zinc-700">
            <div className="max-w-7xl mx-auto px-6 py-12">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {/* Información personal */}
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                    Jorge Iván García Torres
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                    Backend Developer especializado en Java y Spring Boot. 
                    Estudiante de Ingeniería de Sistemas.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/JorgeGarcia105"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                      aria-label="GitHub Profile"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jorgegarcia105"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                      aria-label="LinkedIn Profile"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* Enlaces rápidos */}
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                    Quick Links
                  </h3>
                  <nav className="flex flex-col gap-2" aria-label="Footer navigation">
                    <Link href="/about" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                      About Me
                    </Link>
                    <Link href="/projects" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                      My Projects
                    </Link>
                    <Link href="/skills" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                      Technical Skills
                    </Link>
                    <Link href="/certificates" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                      Certificates
                    </Link>
                  </nav>
                </div>

                {/* Contacto */}
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                    Get In Touch
                  </h3>
                  <div className="flex flex-col gap-2">
                    <a
                      href="mailto:garciatorresjorgeivan10@gmail.com"
                      className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      garciatorresjorgeivan10@gmail.com
                    </a>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      📍 Colombia
                    </p>
                    <Link
                      href="/contact"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition font-medium"
                    >
                      Contact Form →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <div className="pt-8 border-t border-zinc-200 dark:border-zinc-700 text-center">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  © {new Date().getFullYear()} Jorge Iván García Torres. All rights reserved.
                </p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
                  Built with Next.js, TypeScript & Tailwind CSS
                </p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
