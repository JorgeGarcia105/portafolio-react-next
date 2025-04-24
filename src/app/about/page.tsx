"use client";

import { FaCode, FaBrain, FaBookOpen } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 lg:px-24 bg-zinc-50 dark:bg-zinc-900">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-semibold text-center text-zinc-900 dark:text-white mb-12"
      >
        👨‍💻 About Me
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 text-zinc-700 dark:text-zinc-300">
        {/* Texto sobre mí */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg mb-6 leading-relaxed">
            Hi! I'm <strong>Jorge Iván García Torres</strong>, a passionate Backend Developer and Systems Engineering student. I’m always eager to learn and grow in the world of technology.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            My expertise lies in building scalable and efficient systems using <strong>Java, Spring Boot, Python</strong>, and cutting-edge databases.
          </p>
          <p className="text-lg leading-relaxed">
            I value clean code, agile methodologies, and continuously improving my craft to create impactful software.
          </p>
        </motion.div>

        {/* Iconos y habilidades */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          {/* Habilidad 1 */}
          <div className="flex items-start gap-4 hover:scale-105 transition-all duration-300">
            <FaCode className="text-4xl text-blue-600 dark:text-blue-400" />
            <div>
              <h3 className="text-xl font-semibold">Clean Code & Architecture</h3>
              <p className="text-base">I prioritize modularity, performance, and scalability in all my systems.</p>
            </div>
          </div>

          {/* Habilidad 2 */}
          <div className="flex items-start gap-4 hover:scale-105 transition-all duration-300">
            <FaBrain className="text-4xl text-purple-600 dark:text-purple-400" />
            <div>
              <h3 className="text-xl font-semibold">Problem Solving</h3>
              <p className="text-base">I excel at tackling complex problems with efficient algorithms and elegant design.</p>
            </div>
          </div>

          {/* Habilidad 3 */}
          <div className="flex items-start gap-4 hover:scale-105 transition-all duration-300">
            <FaBookOpen className="text-4xl text-green-600 dark:text-green-400" />
            <div>
              <h3 className="text-xl font-semibold">Lifelong Learning</h3>
              <p className="text-base">I am always expanding my knowledge of new technologies and contributing to open-source projects.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
