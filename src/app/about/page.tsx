"use client";

import { FaCode, FaBrain, FaBookOpen } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 lg:px-24 bg-zinc-50 dark:bg-zinc-900">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-zinc-900 dark:text-white mb-12"
      >
        👨‍💻 About Me
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 text-zinc-700 dark:text-zinc-300">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg mb-6 leading-relaxed">
            Hello! I'm <strong>Jorge Iván García Torres</strong>, a Backend Developer and Systems Engineering student passionate about technology, systems design, and continuous growth.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            My focus is on building robust, efficient, and scalable systems using technologies such as <strong>Java, Spring Boot, Python</strong>, and modern databases.
          </p>
          <p className="text-lg leading-relaxed">
            I believe in clean code, agile teamwork, and lifelong learning to deliver impactful software solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-start gap-4">
            <FaCode className="text-3xl text-blue-600 dark:text-blue-400" />
            <div>
              <h3 className="text-xl font-semibold">Clean Code & Architecture</h3>
              <p className="text-base">I build systems focused on modularity, performance, and scalability.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaBrain className="text-3xl text-purple-600 dark:text-purple-400" />
            <div>
              <h3 className="text-xl font-semibold">Problem Solving</h3>
              <p className="text-base">Solving complex problems with efficient algorithms and thoughtful design.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaBookOpen className="text-3xl text-green-600 dark:text-green-400" />
            <div>
              <h3 className="text-xl font-semibold">Lifelong Learning</h3>
              <p className="text-base">Constantly learning new technologies and contributing to open-source projects.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
