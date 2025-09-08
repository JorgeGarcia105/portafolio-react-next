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
    summary: "REST API with JWT authentication.",
    repo: "https://github.com/JorgeGarcia105/ForoHub",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
    slug: "foro-hub",
  },
  // add more...
];

export const allTags = Array.from(new Set(posts.flatMap(p => p.tags))).sort();