"use client";
import { FaJava, FaJs, FaPython, FaAws, FaDocker, FaDatabase, FaGitAlt, FaReact } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiMongodb, SiKubernetes, SiJenkins } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  {
    icon: <FaJava className="text-5xl" />,
    name: "Java",
    level: "Avanzado",
    description: "Desarrollo de aplicaciones empresariales, Spring Framework",
    color: "text-red-500 dark:text-red-400"
  },
  {
    icon: <SiSpringboot className="text-5xl" />,
    name: "Spring Boot",
    level: "Avanzado",
    description: "APIs REST, Spring Security, Microservicios",
    color: "text-green-500 dark:text-green-400"
  },
  {
    icon: <FaPython className="text-5xl" />,
    name: "Python",
    level: "Intermedio",
    description: "Scripting, Automatización, Django",
    color: "text-blue-500 dark:text-blue-400"
  },
  {
    icon: <FaJs className="text-5xl" />,
    name: "JavaScript",
    level: "Intermedio",
    description: "Node.js, Express, Desarrollo Full Stack",
    color: "text-yellow-500 dark:text-yellow-400"
  },
  {
    icon: <FaReact className="text-5xl" />,
    name: "React",
    level: "Intermedio",
    description: "Next.js, Hooks, Context API",
    color: "text-cyan-500 dark:text-cyan-400"
  },
  {
    icon: <FaAws className="text-5xl" />,
    name: "AWS",
    level: "Intermedio",
    description: "EC2, S3, Lambda, RDS",
    color: "text-orange-500 dark:text-orange-400"
  },
  {
    icon: <FaDocker className="text-5xl" />,
    name: "Docker",
    level: "Intermedio",
    description: "Contenedores, Docker Compose",
    color: "text-blue-400 dark:text-blue-300"
  },
  {
    icon: <SiKubernetes className="text-5xl" />,
    name: "Kubernetes",
    level: "Básico",
    description: "Orquestación de contenedores",
    color: "text-blue-600 dark:text-blue-500"
  },
  {
    icon: <SiPostgresql className="text-5xl" />,
    name: "PostgreSQL",
    level: "Intermedio",
    description: "Diseño de bases de datos relacionales",
    color: "text-indigo-500 dark:text-indigo-400"
  },
  {
    icon: <SiMongodb className="text-5xl" />,
    name: "MongoDB",
    level: "Intermedio",
    description: "Bases de datos NoSQL",
    color: "text-green-600 dark:text-green-500"
  },
  {
    icon: <FaGitAlt className="text-5xl" />,
    name: "Git",
    level: "Intermedio",
    description: "Control de versiones, GitHub, GitLab",
    color: "text-orange-600 dark:text-orange-500"
  },
  {
    icon: <SiJenkins className="text-5xl" />,
    name: "Jenkins",
    level: "Básico",
    description: "CI/CD Pipelines",
    color: "text-red-400 dark:text-red-300"
  }
];

const SkillCard = ({ skill, index }: { skill: typeof skills[number]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="flex flex-col items-center p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <div className={`${skill.color} mb-4`}>
      {skill.icon}
    </div>
    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
      {skill.name}
    </h3>
    <span className="text-sm text-blue-600 dark:text-blue-400 mb-2">
      {skill.level}
    </span>
    <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
      {skill.description}
    </p>
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 lg:px-16 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-12"
        >
          My Technical Skills
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-center text-zinc-700 dark:text-zinc-300 mb-16 max-w-3xl mx-auto"
        >
          I specialize in backend development but also have full-stack experience. Here are the technologies I work with and my proficiency level in each.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800"
        >
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">
            Continuous Learning
          </h3>
          <p className="text-zinc-700 dark:text-zinc-300">
            I'm constantly expanding my skill set. Currently learning: <span className="font-medium text-blue-600 dark:text-blue-400">Kubernetes advanced concepts</span> and <span className="font-medium text-blue-600 dark:text-blue-400">GraphQL</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}