import Link from "next/link";
import Image from "next/image";
import { Download, User, Briefcase, Award, BookOpen, Languages, FolderGit2, Users } from "lucide-react";

export default function CV() {
  return (
    <section className="cv-section max-w-3xl mx-auto py-12 px-4 sm:px-8">
      {/* Header */}
      <section className="mb-10 flex flex-col sm:flex-row items-center gap-6">
        <Image
          src="/images/avatar2.png"
          alt="Jorge Iván García Torres"
          width={120}
          height={120}
          className="rounded-full border-4 border-blue-600 shadow-lg"
          priority
        />
        <div>
          <h1 className="text-4xl font-extrabold text-blue-700 mb-1">Jorge Iván García Torres</h1>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 font-semibold mb-2">
            Backend Developer & Systems Engineering Student
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-400 mb-2">
            <span>📱 +57 322 408 0309</span>
            <span>📧 garciatorresjorgeivan10@gmail.com</span>
            <Link href="https://linkedin.com/in/JorgeGarcia105" target="_blank" aria-label="LinkedIn" className="underline text-blue-700">LinkedIn</Link>
            <Link href="https://github.com/JorgeGarcia105" target="_blank" aria-label="GitHub" className="underline text-blue-700">GitHub</Link>
            <Link href="https://jorgegarcia105.github.io/Portafolio/" target="_blank" aria-label="Portfolio" className="underline text-blue-700">Portfolio</Link>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className="mb-8">
        <h2 className="flex items-center gap-2 text-xl font-bold text-blue-700 mb-2">
          <User className="w-5 h-5" /> Profile
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300">
          Motivated Backend Developer and Systems Engineering student with hands-on experience in Java, Spring Boot, and cloud technologies. Skilled in designing secure, scalable, and efficient backend solutions. Passionate about clean architecture, API development, and collaborating in agile teams.
        </p>
      </section>

      <hr className="my-6 border-zinc-200 dark:border-zinc-700" />

      {/* Technical Skills */}
      <section className="mb-8">
        <h2 className="flex items-center gap-2 text-xl font-bold text-blue-700 mb-2">
          <FolderGit2 className="w-5 h-5" /> Technical Skills
        </h2>
        <ul className="flex flex-wrap gap-2">
          {[
            "Java", "Spring Boot", "Python", "Flask", "Django", "LoopBack 4",
            "PostgreSQL", "Oracle", "MySQL", "MongoDB", "REST APIs", "GraphQL",
            "Docker", "Kubernetes", "Jenkins", "Git", "Pandas", "Matplotlib",
            "Algorithm Optimization", "Scrum", "TDD"
          ].map(skill => (
            <li key={skill} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">{skill}</li>
          ))}
        </ul>
      </section>

      <hr className="my-6 border-zinc-200 dark:border-zinc-700" />

      {/* Experience */}
      <section className="mb-8">
        <h2 className="flex items-center gap-2 text-xl font-bold text-blue-700 mb-2">
          <Briefcase className="w-5 h-5" /> Experience
        </h2>
        <div className="mb-4">
          <h3 className="font-semibold text-zinc-900 dark:text-white text-base">
            Backend Developer <span className="text-zinc-500 font-normal">| Digital Funeraria</span>
          </h3>
          <p className="text-sm text-zinc-500 mb-1">Jan 2024 – Jun 2024</p>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300">
            <li>Implemented security with LoopBack 4 and MongoDB/Oracle</li>
            <li>Developed 2FA authentication and notification systems</li>
            <li>Optimized queries, improving efficiency by 15%</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-white text-base">
            Full Stack Developer <span className="text-zinc-500 font-normal">| Document Management System</span>
          </h3>
          <p className="text-sm text-zinc-500 mb-1">Aug 2023 – Dec 2023</p>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300">
            <li>Built a document management system with Python and Tkinter</li>
            <li>Automated processes and improved UX/UI</li>
          </ul>
        </div>
      </section>

      <hr className="my-6 border-zinc-200 dark:border-zinc-700" />

      {/* Projects */}
      <section className="mb-8">
        <h2 className="flex items-center gap-2 text-xl font-bold text-blue-700 mb-2">
          <Award className="w-5 h-5" /> Projects
        </h2>
        <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300">
          <li>
            <b>Foro Hub:</b> Java, Spring Boot, PostgreSQL – REST API for forum management with JWT authentication.{" "}
            <Link href="https://github.com/JorgeGarcia105/ForoHub" target="_blank" className="underline text-blue-700">GitHub</Link>
          </li>
          <li>
            <b>LiterAlura:</b> Java, Spring Boot, Gutendex API – Book catalog with API consumption and PostgreSQL persistence.{" "}
            <Link href="https://github.com/JorgeGarcia105/LiterAlura" target="_blank" className="underline text-blue-700">GitHub</Link>
          </li>
          <li>
            <b>Currency Converter:</b> Java, ExchangeRate API – Real-time currency conversion and historical rates.{" "}
            <Link href="https://github.com/JorgeGarcia105/ConversorDeMoneda" target="_blank" className="underline text-blue-700">GitHub</Link>
          </li>
          <li>
            <b>Maze Solver:</b> Python, Pygame – A* and BFS algorithms for visual maze solving.{" "}
            <Link href="https://github.com/JorgeGarcia105/Laberinto" target="_blank" className="underline text-blue-700">GitHub</Link>
          </li>
        </ul>
      </section>

      <hr className="my-6 border-zinc-200 dark:border-zinc-700" />

      {/* Education */}
      <section className="mb-8">
        <h2 className="flex items-center gap-2 text-xl font-bold text-blue-700 mb-2">
          <BookOpen className="w-5 h-5" /> Education
        </h2>
        <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300">
          <li><b>BSc. Systems Engineering and Computing</b> – Universidad de Caldas (7th semester)</li>
          <li><b>Backend Specialization</b> – Alura Latam (Apr 2024 – Jan 2025)</li>
          <li><b>Backend Developer Program</b> – Alura Latam (Apr 2024 – Feb 2025)</li>
        </ul>
      </section>

      <hr className="my-6 border-zinc-200 dark:border-zinc-700" />

      {/* Certifications */}
      <section className="mb-8">
        <h2 className="flex items-center gap-2 text-xl font-bold text-blue-700 mb-2">
          <Award className="w-5 h-5" /> Certifications
        </h2>
        <ul className="flex flex-wrap gap-2">
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">Oracle Next Education (ONE) – Jan 2025</li>
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">Backend Developer – Alura Latam – Feb 2025</li>
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">ALUMNI Student – Alura Latam – Apr 2025</li>
        </ul>
      </section>

      <hr className="my-6 border-zinc-200 dark:border-zinc-700" />

      {/* Languages */}
      <section className="mb-8">
        <h2 className="flex items-center gap-2 text-xl font-bold text-blue-700 mb-2">
          <Languages className="w-5 h-5" /> Languages
        </h2>
        <ul className="flex flex-wrap gap-2">
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">Spanish (Native)</li>
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">English (Intermediate, technical reading)</li>
        </ul>
      </section>

      <hr className="my-6 border-zinc-200 dark:border-zinc-700" />

      {/* References */}
      <section className="mb-8">
        <h2 className="flex items-center gap-2 text-xl font-bold text-blue-700 mb-2">
          <Users className="w-5 h-5" /> References
        </h2>
        <ul className="list-inside text-zinc-700 dark:text-zinc-300">
          <li>
            <b>Bailey Dupont</b> – Senior Software Engineer, Digital Funeraria<br />
            📱 +57 123-456-7890 | ✉️ bailey.dupont@email.com
          </li>
          <li className="mt-2">
            <b>Harumi Kobayashi</b> – Team Lead, Alura Latam<br />
            📱 +57 321-654-9870 | ✉️ harumi.koba@email.com
          </li>
        </ul>
      </section>

      <section className="flex justify-center">
        <Link
          href="/docs/CV_Jorge_Garcia.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-blue-700 text-white font-bold rounded-lg shadow hover:bg-blue-800 transition"
          aria-label="Download my CV in PDF"
        >
          <Download className="w-5 h-5" /> Download my CV (PDF)
        </Link>
      </section>
    </section>
  );
}