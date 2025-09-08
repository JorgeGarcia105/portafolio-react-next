"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm shadow-sm border-b border-zinc-100 dark:border-zinc-800">
      <div className="container flex items-center justify-between py-4">
        <motion.div
          initial={{ y: -6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-4 motion-layer"
        >
          <Link
            href="/"
            className="text-2xl font-extrabold text-blue-700 dark:text-blue-400 focus:outline-none focus:ring-2 rounded"
          >
            J. García
          </Link>
          <span className="text-sm text-zinc-500 hidden md:inline">
            Backend · IA aplicada · Cloud
          </span>
        </motion.div>

  <nav className="flex items-center gap-4 motion-layer">
          <Link href="/projects" className="nav-link">
            Projects
          </Link>
          <Link href="/blog" className="nav-link">
            Blog
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}