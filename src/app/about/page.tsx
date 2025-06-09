"use client";

import { FaCode, FaBrain, FaBookOpen, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 lg:px-24 bg-zinc-50 dark:bg-zinc-900"
      aria-labelledby="about-heading"
    >
      <motion.h2
        id="about-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-zinc-900 dark:text-white mb-12"
      >
        👨‍💻 About Me
      </motion.h2>

      <div className="max-w-6xl mx-auto">
        {/* Información personal con imagen */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Imagen profesional */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-200 dark:border-blue-800 shadow-lg">
              <Image
                src="/images/avatar2.png"
                alt="Jorge García - Desarrollador Backend"
                width={192}
                height={192}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>

          {/* Texto sobre mí */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 text-zinc-700 dark:text-zinc-300"
          >
            <p className="text-lg mb-6 leading-relaxed">
              Hi! I'm{" "}
              <strong className="text-blue-600 dark:text-blue-400">
                Jorge Iván García Torres
              </strong>
              , a passionate Backend Developer and Systems Engineering student from
              Colombia. I'm always eager to learn and grow in the ever-evolving
              world of technology.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              My expertise lies in building{" "}
              <em className="font-medium">scalable and efficient systems</em> using
              <strong className="text-blue-600 dark:text-blue-400"> Java, Spring Boot, Python</strong>, and
              cutting-edge databases like MySQL and Oracle.
            </p>
            <p className="text-lg leading-relaxed">
              I value{" "}
              <strong className="text-green-600 dark:text-green-400">clean code</strong>,
              agile methodologies, and continuously improving my craft to create
              impactful software that solves real-world problems.
            </p>

            {/* Estadísticas rápidas */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  3+
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  Years Learning
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  15+
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  Projects Completed
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Habilidades principales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Habilidades principales"
        >
          {/* Habilidad 1 */}
          <article className="group p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-zinc-200 dark:border-zinc-700">
            <div className="flex flex-col items-center text-center">
              <FaCode
                className="text-5xl text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform"
                aria-hidden="true"
              />
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                Clean Code & Architecture
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                I prioritize modularity, performance, and scalability in all my
                systems.
              </p>
            </div>
          </article>

          {/* Habilidad 2 */}
          <article className="group p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-zinc-200 dark:border-zinc-700">
            <div className="flex flex-col items-center text-center">
              <FaBrain
                className="text-5xl text-purple-600 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform"
                aria-hidden="true"
              />
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                Problem Solving
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                I excel at tackling complex problems with efficient algorithms and
                elegant design.
              </p>
            </div>
          </article>

          {/* Habilidad 3 */}
          <article className="group p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-zinc-200 dark:border-zinc-700">
            <div className="flex flex-col items-center text-center">
              <FaBookOpen
                className="text-5xl text-green-600 dark:text-green-400 mb-4 group-hover:scale-110 transition-transform"
                aria-hidden="true"
              />
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                Lifelong Learning
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Always expanding my knowledge of new technologies and contributing
                to open-source projects.
              </p>
            </div>
          </article>

          {/* Habilidad 4 - Nueva */}
          <article className="group p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-zinc-200 dark:border-zinc-700">
            <div className="flex flex-col items-center text-center">
              <FaGraduationCap
                className="text-5xl text-orange-600 dark:text-orange-400 mb-4 group-hover:scale-110 transition-transform"
                aria-hidden="true"
              />
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                Academic Excellence
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Currently pursuing Systems Engineering with focus on software
                architecture.
              </p>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
