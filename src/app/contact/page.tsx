"use client";

import { Mail, Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 lg:px-16 bg-gradient-to-br from-blue-50 via-zinc-100 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-zinc-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-lg text-zinc-600 dark:text-zinc-300 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I'm always open to interesting ideas, tech talks, and creative collaborations. Feel free to drop a message!
        </motion.p>

        <motion.a
          href="mailto:jorgarciatorres@outlook.com"
          className="inline-flex items-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-full shadow-xl hover:bg-blue-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <Mail className="w-5 h-5" />
          Contact Me
        </motion.a>

        <motion.div
          className="flex justify-center gap-6 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <SocialLink href="https://github.com/JorgeGarcia105" icon={<Github />} />
          <SocialLink href="https://linkedin.com/in/JorgeGarcia105" icon={<Linkedin />} />
          <SocialLink href="https://instagram.com/TU_USUARIO" icon={<Instagram />} />
          <SocialLink href="https://twitter.com/TU_USUARIO" icon={<Twitter />} />
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-white transition transform hover:scale-110"
    >
      <div className="p-3 rounded-full border border-zinc-300 dark:border-zinc-600 hover:shadow-md">
        {icon}
      </div>
    </a>
  );
}
