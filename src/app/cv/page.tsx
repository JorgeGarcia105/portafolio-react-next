import Link from "next/link";
import Image from "next/image";
import PrintCVButton from "@/components/PrintCVButton";
import {
  Download,
  User,
  Briefcase,
  Award,
  BookOpen,
  Languages,
  FolderGit2,
  Link as LinkIcon,
} from "lucide-react";

export default function CV() {
  return (
    <>
    <section className="cv-section max-w-3xl mx-auto py-8 px-4 sm:px-8">
      <div className="flex justify-end mb-4 print:hidden">
        <PrintCVButton />
      </div>
    <div className="cv-printable bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md">
    {/* Header */}
  <section className="cv-header mb-8 flex flex-col sm:flex-row items-center gap-4">
            <Image
              src="/images/avatar.png"
              alt="Jorge Iván García Torres"
              width={120}
              height={120}
              className="rounded-full border-4 border-blue-600 shadow-lg"
              priority
            />
        <div>
          <h1 className="text-4xl font-extrabold text-blue-700 mb-1">Jorge Iván García Torres</h1>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 font-semibold mb-2">
            Backend Developer · Systems Engineering Student — Universidad de Caldas (9°-10° semestre, graduación esperada 2027-2)
          </p>

          <div className="mt-2 flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-400 mb-2">
            <span className="inline-flex items-center gap-2">📧 <a href="mailto:garciatorresjorgeivan10@gmail.com" className="underline text-blue-700">garciatorresjorgeivan10@gmail.com</a></span>
            <span className="inline-flex items-center gap-2">📱 <span>+57 322 408 0309</span></span>
            <span className="inline-flex items-center gap-2">📍 <span>Manizales, Caldas, Colombia</span></span>
            <Link href="https://jorgegarcia105.github.io/Portafolio/" target="_blank" className="inline-flex items-center gap-1 text-blue-700 underline" aria-label="Portfolio">
              <LinkIcon className="w-4 h-4" /> Portfolio
            </Link>
            <Link href="https://github.com/JorgeGarcia105" target="_blank" className="inline-flex items-center gap-1 text-blue-700 underline" aria-label="GitHub">
              GitHub
            </Link>
            <Link href="https://linkedin.com/in/JorgeGarcia105" target="_blank" className="inline-flex items-center gap-1 text-blue-700 underline" aria-label="LinkedIn">
              LinkedIn
            </Link>
          </div>
        </div>
  </section>

      <hr className="my-6 border-zinc-200 dark:border-zinc-700" />

      <div className="cv-columns">
  {/* Profile (moved inside columns to participate in print column flow) */}
  <section className="mb-4">
        <h2 className="flex items-center gap-2 text-xl font-bold text-blue-700 mb-1">
          <User className="w-5 h-5" /> Profile
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300">
          Backend developer in formation with practical experience in Java (Spring Boot), secure API design, microservices and cloud deployments.
          Experience with PostgreSQL, Oracle and MongoDB. Interested in applied AI, automation and clean architecture. Fast learner, detail-oriented and focused on testable, maintainable solutions.
          Final-year Systems Engineering student (9°-10° semester) at Universidad de Caldas, seeking a professional internship for 2027-1.
        </p>
  </section>

      {/* Key Skills */}
  <section className="mb-6">
        <h2 className="flex items-center gap-2 text-xl font-bold text-blue-700 mb-3">
          <FolderGit2 className="w-5 h-5" /> Key Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 mb-2">Languages & Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {["Java", "Spring Boot", "Python", "Flask", "Django", "LoopBack 4", "TypeScript", "React", "Next.js"].map((s) => (
                <span key={s} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 mb-2">Databases, DevOps & Practices</h3>
            <div className="flex flex-wrap gap-2">
              {["PostgreSQL", "Oracle", "MongoDB", "Docker", "Kubernetes", "Jenkins", "AWS", "Git", "TDD", "Scrum"].map((s) => (
                <span key={s} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
  </section>

      <hr className="my-6 border-zinc-200 dark:border-zinc-700" />

      {/* Experience */}
  <section className="mb-6">
        <h2 className="flex items-center gap-2 text-xl font-bold text-blue-700 mb-3">
          <Briefcase className="w-5 h-5" /> Professional Experience
        </h2>

        <article className="mb-4">
          <h3 className="font-semibold text-zinc-900 dark:text-white">Backend Developer — Digital Funeraria</h3>
          <p className="text-sm text-zinc-500 mb-2">Jan 2024 – Jun 2024</p>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300">
            <li>Implemented secure APIs and authentication with LoopBack 4; integrated MongoDB and Oracle as required.</li>
            <li>Designed and implemented 2FA and notification systems to improve security and UX.</li>
            <li>Optimized queries and endpoints, improving response times by ~15%.</li>
          </ul>
        </article>

        <article>
          <h3 className="font-semibold text-zinc-900 dark:text-white">Full Stack Developer — Document Management System (Academic)</h3>
          <p className="text-sm text-zinc-500 mb-2">Aug 2023 – Dec 2023</p>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300">
            <li>Built a document management application using Python and Tkinter with automation for batch processing.</li>
            <li>Improved UX/UI and reduced manual workload by automating repetitive tasks.</li>
          </ul>
        </article>
  </section>

      <hr className="my-6 border-zinc-200 dark:border-zinc-700" />

      {/* Projects */}
  <section className="mb-6">
        <h2 className="flex items-center gap-2 text-xl font-bold text-blue-700 mb-2">
          <Award className="w-5 h-5" /> Selected Projects
        </h2>
        <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300">
          <li>
            <strong>Foro Hub</strong> — Java, Spring Boot, PostgreSQL, JWT. REST API for online forums with CRUD, business validations and authentication.{" "}
            <Link href="https://github.com/JorgeGarcia105/ForoHub" target="_blank" className="underline text-blue-700">GitHub</Link>
          </li>
          <li>
            <strong>LiterAlura</strong> — Java, Spring Boot, Gutendex API, PostgreSQL. External API consumption and persistence for a book catalog.{" "}
            <Link href="https://github.com/JorgeGarcia105/LiterAlura" target="_blank" className="underline text-blue-700">GitHub</Link>
          </li>
          <li>
            <strong>GestionHorario</strong> — Python, Flask, SQLite. Automatic academic schedule generator without conflicts based on credits and weekly options.{" "}
            <Link href="https://github.com/JorgeGarcia105/GestionHorario" target="_blank" className="underline text-blue-700">GitHub</Link>
          </li>
          <li>
            <strong>Complexity-Analyzer</strong> — Python. Automatic algorithmic complexity analyzer with execution traces, Master Theorem, Substitution and Recursion Trees.{" "}
            <Link href="https://github.com/JorgeGarcia105/Complexity-Analyzer" target="_blank" className="underline text-blue-700">GitHub</Link>
          </li>
          <li>
            <strong>Simulador-Computador</strong> — JavaScript, React. Interactive computer architecture simulator: CPU, RAM, ROM, Buses, I/O and Disk.{" "}
            <Link href="https://github.com/JorgeGarcia105/Simulador-Computador" target="_blank" className="underline text-blue-700">GitHub</Link>
          </li>
          <li>
            <strong>Conversor de Moneda</strong> — Java, ExchangeRate API. Real-time currency conversion and historical rates.{" "}
            <Link href="https://github.com/JorgeGarcia105/ConversorDeMoneda" target="_blank" className="underline text-blue-700">GitHub</Link>
          </li>
          <li>
            <strong>Laberinto</strong> — Python, Pygame. Visual maze solver with A* and BFS algorithms.{" "}
            <Link href="https://github.com/JorgeGarcia105/Laberinto" target="_blank" className="underline text-blue-700">GitHub</Link>
          </li>
        </ul>
  </section>

      <hr className="my-6 border-zinc-200 dark:border-zinc-700" />

      {/* Education */}
  <section className="mb-6">
        <h2 className="flex items-center gap-2 text-xl font-bold text-blue-700 mb-2">
          <BookOpen className="w-5 h-5" /> Education
        </h2>
        <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300">
          <li><strong>BSc. Systems Engineering & Computing</strong> — Universidad de Caldas (9°-10° semester, 5 courses remaining, expected graduation 2027-2)</li>
          <li><strong>Backend Specialization</strong> — Alura Latam (Apr 2024 – Jan 2025)</li>
          <li><strong>Backend Developer Program</strong> — Alura Latam (Apr 2024 – Feb 2025)</li>
        </ul>
  </section>

      <hr className="my-6 border-zinc-200 dark:border-zinc-700" />

  {/* Certifications */}
      <section className="mb-8">
        <h2 className="flex items-center gap-2 text-xl font-bold text-blue-700 mb-2">
          <Award className="w-5 h-5" /> Certifications
        </h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">Oracle Next Education (ONE) — Jan 2025</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">Backend Developer — Alura Latam — Feb 2025</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">ALUMNI — Alura Latam — Apr 2025</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">Spring Boot — APIs, JPA, Security</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">Google Gemini — Prompt Engineering & Workspace Integration (Sep 2025)</span>
        </div>
      </section>

      <hr className="my-6 border-zinc-200 dark:border-zinc-700" />

      {/* Languages */}
      <section className="mb-8">
        <h2 className="flex items-center gap-2 text-xl font-bold text-blue-700 mb-2">
          <Languages className="w-5 h-5" /> Languages
        </h2>
        <ul className="flex flex-wrap gap-2">
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">Spanish — Native</li>
          <li className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">English — Intermediate (technical reading)</li>
        </ul>
      </section>

      <hr className="my-6 border-zinc-200 dark:border-zinc-700" />

      </div>
    </div>
  </section>

  <section className="flex justify-center mt-4 print:hidden">
    <Link
      href="/docs/CV_Jorge_Garcia.pdf"
      target="_blank"
      className="inline-flex items-center gap-2 mt-2 px-6 py-3 bg-blue-700 text-white font-bold rounded-lg shadow hover:bg-blue-800 transition"
      aria-label="Download my CV in PDF"
    >
      <Download className="w-5 h-5" /> Download my CV (PDF)
    </Link>
  </section>
  </>

  );
}