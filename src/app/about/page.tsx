"use client";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 lg:px-16 bg-zinc-50 dark:bg-zinc-900">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-6">
        About Me
      </h2>
      <div className="max-w-3xl mx-auto text-zinc-700 dark:text-zinc-300">
        <p className="text-lg mb-4">
          Hi! I'm Jorge Iván García Torres, a passionate Backend Developer and a Systems Engineering student. I am dedicated to creating scalable and
          reliable systems that help businesses grow. My primary focus is on clean code, performance optimization, and continuous learning.
        </p>
        <p className="text-lg mb-4">
          I have a strong background in technologies like Java, Spring Boot, Python, and more. I'm always exploring new tools and techniques to improve
          my skills and solve complex problems. I love collaborating with teams and sharing knowledge.
        </p>
        <p className="text-lg mb-4">
          Outside of programming, I enjoy reading, solving puzzles, and contributing to open-source projects. My goal is to build innovative solutions
          that can make a positive impact.
        </p>
      </div>
    </section>
  );
}
