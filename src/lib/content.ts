export const posts = [
  {
    title: "How to Build a REST API with Spring Boot",
    date: "2025-06-01",
    summary: "Step-by-step guide to creating a secure and scalable REST API using Java and Spring Boot.",
    slug: "rest-api-spring-boot",
    tags: ["Spring Boot", "Java", "API"],
  },
  {
    title: "Optimizing SQL Queries for Large Databases",
    date: "2025-05-15",
    summary: "Best practices and tips for improving the performance of your SQL queries in PostgreSQL and Oracle.",
    slug: "optimizing-sql-queries",
    tags: ["SQL", "PostgreSQL", "Oracle"],
  },
];

export const projects = [
  {
    title: "Foro Hub",
    summary: "REST API con autenticación JWT para gestión de foros en línea.",
    repo: "https://github.com/JorgeGarcia105/ForoHub",
    tech: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
    slug: "foro-hub",
  },
  {
    title: "LiterAlura",
    summary: "Catálogo de libros con consumo de API externa (Gutendex) y persistencia en PostgreSQL.",
    repo: "https://github.com/JorgeGarcia105/LiterAlura",
    tech: ["Java", "Spring Boot", "PostgreSQL", "API REST"],
    slug: "literalura",
  },
  {
    title: "GestionHorario",
    summary: "Generador automático de horarios académicos sin conflictos por créditos y opciones semanales (Flask + SQLite).",
    repo: "https://github.com/JorgeGarcia105/GestionHorario",
    tech: ["Python", "Flask", "SQLite", "Algoritmos"],
    slug: "gestion-horario",
  },
  {
    title: "Complexity-Analyzer",
    summary: "Analizador automático de complejidad algorítmica con trazas de ejecución, Teorema Maestro, Sustitución y Árboles de Recursión.",
    repo: "https://github.com/JorgeGarcia105/Complexity-Analyzer",
    tech: ["Python", "Algoritmos", "Análisis de Complejidad"],
    slug: "complexity-analyzer",
  },
  {
    title: "Simulador-Computador",
    summary: "Simulador interactivo de arquitectura de computador: CPU, RAM, ROM, Buses, Entrada/Salida y Disco (React).",
    repo: "https://github.com/JorgeGarcia105/Simulador-Computador",
    tech: ["JavaScript", "React", "Arquitectura de Computadoras"],
    slug: "simulador-computador",
  },
  {
    title: "Conversor de Moneda",
    summary: "Conversor con tasas de cambio en tiempo real y consulta de tasas históricas.",
    repo: "https://github.com/JorgeGarcia105/ConversorDeMoneda",
    tech: ["Java", "API ExchangeRate"],
    slug: "conversor-moneda",
  },
  {
    title: "Laberinto",
    summary: "Solucionador visual de laberintos con algoritmos A* y BFS (Python + Pygame).",
    repo: "https://github.com/JorgeGarcia105/Laberinto",
    tech: ["Python", "Pygame", "A*", "BFS"],
    slug: "laberinto",
  },
  {
    title: "ms-seguridad-ventas-2024",
    summary: "Microservicio de seguridad para servicio de ventas (autenticación y autorización).",
    repo: "https://github.com/JorgeGarcia105/ms-seguridad-ventas-2024",
    tech: ["TypeScript", "Microservicios", "Seguridad"],
    slug: "ms-seguridad-ventas-2024",
  },
  {
    title: "FunerariaDigital-ms-seguridad",
    summary: "Microservicio de seguridad de una Funeraria Digital con autenticación y notificaciones.",
    repo: "https://github.com/JorgeGarcia105/FunerariaDigital-ms-seguridad",
    tech: ["TypeScript", "Microservicios", "Seguridad"],
    slug: "funeraria-ms-seguridad",
  },
  {
    title: "portafolio-react-next",
    summary: "Portafolio personal desarrollado con Next.js 13+, desplegado en Vercel. Perfil profesional, certificaciones, proyectos y experiencia.",
    repo: "https://github.com/JorgeGarcia105/portafolio-react-next",
    tech: ["TypeScript", "Next.js", "React", "Vercel"],
    slug: "portafolio-react-next",
  },
];

export const allTags = Array.from(new Set(posts.flatMap(p => p.tags))).sort();