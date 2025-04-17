import ProjectCard from "../../components/ProjectCard";

const projects = [
  {
    title: "Foro Hub",
    description:
      "A modern forum platform built with React and Node.js. Users can post and interact with topics.",
    url: "https://example.com/foro-hub",
    imageUrl: "/images/foro-hub.jpg",
  },
  {
    title: "LiterAlura",
    description:
      "A book recommendation app that helps users discover and track their favorite books.",
    url: "https://example.com/literalura",
    imageUrl: "/images/Backend_certificado.png"
  },
  {
    title: "Labyrinth Solver",
    description:
      "A Python-based maze solver that uses algorithms like DFS and BFS to find the shortest path.",
    url: "https://example.com/labyrinth-solver",
    imageUrl: "/images/labyrinth-solver.jpg",
  },
];

export default function Projects() {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            url={project.url}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
