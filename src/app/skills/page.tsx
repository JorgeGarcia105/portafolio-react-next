"use client";

import { FaJava, FaPython, FaDocker, FaAws } from "react-icons/fa"; // Instala react-icons si no lo tienes

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 lg:px-16 bg-zinc-50 dark:bg-zinc-900">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-8">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center">
          <FaJava className="text-5xl text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">Java</h3>
        </div>
        <div className="flex flex-col items-center">
          <FaPython className="text-5xl text-yellow-500 dark:text-yellow-400 mb-4" />
          <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">Python</h3>
        </div>
        <div className="flex flex-col items-center">
          <FaDocker className="text-5xl text-teal-500 dark:text-teal-400 mb-4" />
          <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">Docker</h3>
        </div>
        <div className="flex flex-col items-center">
          <FaAws className="text-5xl text-orange-500 dark:text-orange-400 mb-4" />
          <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">AWS</h3>
        </div>
      </div>
    </section>
  );
}
