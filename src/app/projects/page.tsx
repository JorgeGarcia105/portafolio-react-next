import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "LiterAlura",
    description:
      "A book recommendation app that helps users discover and track their favorite books.",
    url: "https://example.com/literalura",
    imageUrl: "/images/Literatura.png",
    technologies: ["Java", "Spring Boot", "MySQL"],
  },
  {
    title: "Labyrinth Solver",
    description:
      "A Python-based maze solver that uses algorithms like DFS and BFS to find the shortest path.",
    url: "https://example.com/labyrinth-solver",
    imageUrl: "/images/labyrinth-solver.jpg",
    technologies: ["Python", "Graph Theory", "Algorithms"],
  },
  // Project 6: Digital Funeral Platform
  {
    title: "Digital Funeral Platform",
    description:
      "A platform designed to modernize and optimize the management of funeral services, integrating all customer support operations and communication with users.",
    url: "https://github.com/JorgeGarcia105/Funeraria.git",
    imageUrl: "/images/projects/Funeraria_Digital.png", // Make sure the image is available
    technologies: ["LoopBack 4", "MongoDB", "Oracle", "Angular 17", "Messaging and Security"],
  },
  // Project 1: Maze Solver
  {
    title: "Maze Solver with Python Visualization",
    description:
      "A Python program that uses recursive algorithms to solve mazes loaded from a CSV file. It visualizes the maze and the paths found using matplotlib and colorama.",
    url: "https://github.com/JorgeGarcia105/Laberinto", // Link to the repository
    imageUrl: "/images/projects/laberinto.png", // Make sure the image is available
    technologies: ["Python", "matplotlib", "colorama", "CSV files"],
  },
  // Project 2: Tic Tac Toe
  {
    title: "Tic Tac Toe with Move Evaluation in Python",
    description:
      "Implementation of a Tic Tac Toe game using Tkinter for the GUI and a decision tree to evaluate future moves, considering probabilities of winning, drawing, or losing.",
    url: "https://github.com/JorgeGarcia105/TicTacToe", // Link to the repository
    imageUrl: "/images/projects/tictactoe.png", // Make sure the image is available
    technologies: ["Python", "Tkinter", "Decision Trees"],
  },
  // Project 3: Operating System GarciaOS
  {
    title: "Operating System GarciaOS",
    description:
      "Creation of an operating system from scratch to explore fundamental computer science concepts. It includes custom booting, user authentication, and file management.",
    url: "https://github.com/JorgeGarcia105/GarciaOS", // Link to the repository
    imageUrl: "/images/projects/garciaos.png", // Make sure the image is available
    technologies: ["Python", "Assembler", "VirtualBox", "QEMU"],
  },
  // Project 4: File Manager
  {
    title: "File Manager in Python",
    description:
      "A collaborative project that allows copying, pasting, cutting, renaming, and deleting files through a GUI developed with Tkinter. It optimizes file management in a hierarchical structure.",
    url: "https://github.com/JorgeGarcia105/GestorDeArchivos", // Link to the repository
    imageUrl: "/images/projects/gestor.png", // Make sure the image is available
    technologies: ["Python", "Tkinter", "os", "shutil"],
  },
  // Project 5: Currency Converter
  {
    title: "Currency Converter",
    description:
      "A currency converter project that allows users to convert between different currencies using real-time exchange rates. It is a useful and educational tool for performing currency conversions.",
    url: "https://github.com/JorgeGarcia105/ConversorDeMoneda", // Link to the repository
    imageUrl: "/images/projects/conversor.png", // Make sure the image is available
    technologies: ["Java", "Gson", "HttpClient"],
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
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}
