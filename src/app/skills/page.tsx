"use client";
import { FaJava, FaJs, FaPython, FaAws, FaDocker, FaDatabase, FaGitAlt, FaReact } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiMongodb, SiKubernetes, SiJenkins, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

// Organizadas por categorías para mejor presentación
const skillCategories = [
  {
    title: "Backend Development",
    icon: "🚀",
    skills: [
      {
        icon: <FaJava className="text-5xl" />,
        name: "Java",
        level: "Avanzado" as const,
        percentage: 90,
        description: "Desarrollo de aplicaciones empresariales, Spring Framework",
        color: "text-red-500 dark:text-red-400"
      },
      {
        icon: <SiSpringboot className="text-5xl" />,
        name: "Spring Boot",
        level: "Avanzado" as const, 
        percentage: 85,
        description: "APIs REST, Spring Security, Microservicios",
        color: "text-green-500 dark:text-green-400"
      },
      {
        icon: <FaPython className="text-5xl" />,
        name: "Python",
        level: "Intermedio" as const,
        percentage: 75,
        description: "Scripting, Automatización, Django",
        color: "text-blue-500 dark:text-blue-400"
      },
      {
        icon: <FaJs className="text-5xl" />,
        name: "JavaScript",
        level: "Intermedio" as const,
        percentage: 70,
        description: "Node.js, Express, Desarrollo Full Stack",
        color: "text-yellow-500 dark:text-yellow-400"
      }
    ]
  },
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: [
      {
        icon: <FaReact className="text-5xl" />,
        name: "React",
        level: "Intermedio" as const,
        percentage: 75,
        description: "Next.js, Hooks, Context API",
        color: "text-cyan-500 dark:text-cyan-400"
      }
    ]
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: [
      {
        icon: <SiPostgresql className="text-5xl" />,
        name: "PostgreSQL",
        level: "Intermedio" as const,
        percentage: 80,
        description: "Diseño de bases de datos relacionales",
        color: "text-indigo-500 dark:text-indigo-400"
      },
      {
        icon: <SiMysql className="text-5xl" />,
        name: "MySQL",
        level: "Intermedio" as const,
        percentage: 75,
        description: "Optimización, procedimientos almacenados",
        color: "text-blue-600 dark:text-blue-400"
      },
      {
        icon: <SiMongodb className="text-5xl" />,
        name: "MongoDB",
        level: "Intermedio" as const,
        percentage: 70,
        description: "Bases de datos NoSQL",
        color: "text-green-600 dark:text-green-500"
      }
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    skills: [
      {
        icon: <FaAws className="text-5xl" />,
        name: "AWS",
        level: "Intermedio" as const,
        percentage: 65,
        description: "EC2, S3, Lambda, RDS",
        color: "text-orange-500 dark:text-orange-400"
      },
      {
        icon: <FaDocker className="text-5xl" />,
        name: "Docker",
        level: "Intermedio" as const,
        percentage: 70,
        description: "Contenedores, Docker Compose",
        color: "text-blue-400 dark:text-blue-300"
      },
      {
        icon: <SiKubernetes className="text-5xl" />,
        name: "Kubernetes",
        level: "Básico" as const,
        percentage: 45,
        description: "Orquestación de contenedores",
        color: "text-blue-600 dark:text-blue-500"
      },
      {
        icon: <SiJenkins className="text-5xl" />,
        name: "Jenkins",
        level: "Básico" as const,
        percentage: 50,
        description: "CI/CD Pipelines",
        color: "text-red-400 dark:text-red-300"
      }
    ]
  },
  {
    title: "Tools & Version Control",
    icon: "🛠️",
    skills: [
      {
        icon: <FaGitAlt className="text-5xl" />,
        name: "Git",
        level: "Intermedio" as const,
        percentage: 80,
        description: "Control de versiones, GitHub, GitLab",
        color: "text-orange-600 dark:text-orange-500"
      }
    ]
  }
];

type Skill = {
  icon: React.ReactNode;
  name: string;
  level: "Avanzado" | "Intermedio" | "Básico";
  percentage: number;
  description: string;
  color: string;
};

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group flex flex-col items-center p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-zinc-200 dark:border-zinc-700"
    role="listitem"
  >
    <div className={`${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
      {skill.icon}
    </div>
    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
      {skill.name}
    </h3>
    <span className={`text-sm mb-2 px-3 py-1 rounded-full ${
      skill.level === 'Avanzado' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
      skill.level === 'Intermedio' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
      'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
    }`}>
      {skill.level}
    </span>
    
    {/* Barra de progreso */}
    <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2 mb-3">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.percentage}%` }}
        transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
        viewport={{ once: true }}
        className={`h-2 rounded-full ${
          skill.level === 'Avanzado' ? 'bg-green-500' :
          skill.level === 'Intermedio' ? 'bg-blue-500' :
          'bg-yellow-500'
        }`}
      />
    </div>
    
    <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
      {skill.description}
    </p>
  </motion.article>
);

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="py-20 px-6 lg:px-16 bg-zinc-50 dark:bg-zinc-900"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          id="skills-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-12"
        >
          💻 My Technical Skills
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-center text-zinc-700 dark:text-zinc-300 mb-16 max-w-3xl mx-auto"
        >
          I specialize in <strong className="text-blue-600 dark:text-blue-400">backend development</strong> but also have 
          full-stack experience. Here are the technologies I work with and my proficiency level in each.
        </motion.p>

        {/* Skills por categorías */}
        {skillCategories.map((category, categoryIndex) => (
          <motion.section
            key={category.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
            aria-labelledby={`category-${categoryIndex}`}
          >
            <h3 
              id={`category-${categoryIndex}`}
              className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-3"
            >
              <span className="text-3xl" aria-hidden="true">{category.icon}</span>
              {category.title}
            </h3>
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              role="list"
              aria-label={`Habilidades de ${category.title}`}
            >
              {category.skills.map((skill, index) => (
                <div role="listitem" key={skill.name}>
                  <SkillCard skill={skill} index={index} />
                </div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* Sección de aprendizaje continuo mejorada */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-8 rounded-2xl border border-blue-200 dark:border-blue-800"
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-200 mb-4 flex items-center justify-center gap-2">
              <span className="text-3xl" aria-hidden="true">📚</span>
              Continuous Learning
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              I'm constantly expanding my skill set. Currently learning:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-800/50 text-blue-700 dark:text-blue-300 rounded-full font-medium">
                Kubernetes Advanced Concepts
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-800/50 text-purple-700 dark:text-purple-300 rounded-full font-medium">
                GraphQL
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-800/50 text-green-700 dark:text-green-300 rounded-full font-medium">
                Microservices Architecture
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}