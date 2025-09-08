"use client";
import ProjectCard from "@/components/ProjectCard";
import { TourProvider, useTour } from "@reactour/tour";
import { useState } from "react";

// Project type definition
type Project = {
	title: string;
	description: string;
	url: string;
	imageUrl: string;
	technologies: string[];
};

// Imágenes libres de la web para cada proyecto
const projects: Project[] = [
	{
		title: "LiterAlura",
		description:
			"A book recommendation app that helps users discover and track their favorite books.",
		url: "https://example.com/literalura",
		imageUrl:
			"https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80", // Unsplash: books
		technologies: ["Java", "Spring Boot", "MySQL"],
	},
	{
		title: "Labyrinth Solver",
		description:
			"A Python-based maze solver that uses algorithms like DFS and BFS to find the shortest path.",
		url: "https://example.com/labyrinth-solver",
		imageUrl:
			"https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80", // Unsplash: aerial maze, diferente y clara
		technologies: ["Python", "Graph Theory", "Algorithms"],
	},
	{
		title: "Digital Funeral Platform",
		description:
			"A platform designed to modernize and optimize the management of funeral services, integrating all customer support operations and communication with users.",
		url: "https://github.com/JorgeGarcia105/Funeraria.git",
		imageUrl:
			"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", // Unsplash: abstract
		technologies: [
			"LoopBack 4",
			"MongoDB",
			"Oracle",
			"Angular 17",
			"Messaging and Security",
		],
	},
	{
		title: "Maze Solver with Python Visualization",
		description:
			"A Python program that uses recursive algorithms to solve mazes loaded from a CSV file. It visualizes the maze and the paths found using matplotlib and colorama.",
		url: "https://github.com/JorgeGarcia105/Laberinto",
		imageUrl:
			"https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=600&q=80", // Unsplash: data visualization
		technologies: ["Python", "matplotlib", "colorama", "CSV files"],
	},
	{
		title: "Tic Tac Toe with Move Evaluation in Python",
		description:
			"Implementation of a Tic Tac Toe game using Tkinter for the GUI and a decision tree to evaluate future moves, considering probabilities of winning, drawing, or losing.",
		url: "https://github.com/JorgeGarcia105/TicTacToe",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/3/32/Tic_tac_toe.svg", // Wikimedia: tic tac toe
		technologies: ["Python", "Tkinter", "Decision Trees"],
	},
	{
		title: "Operating System GarciaOS",
		description:
			"Creation of an operating system from scratch to explore fundamental computer science concepts. It includes custom booting, user authentication, and file management.",
		url: "https://github.com/JorgeGarcia105/GarciaOS",
		imageUrl:
			"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80", // Unsplash: code
		technologies: ["Python", "Assembler", "VirtualBox", "QEMU"],
	},
	{
		title: "File Manager in Python",
		description:
			"A collaborative project that allows copying, pasting, cutting, renaming, and deleting files through a GUI developed with Tkinter. It optimizes file management in a hierarchical structure.",
		url: "https://github.com/JorgeGarcia105/GestorDeArchivos",
		imageUrl:
			"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80", // Unsplash: folders
		technologies: ["Python", "Tkinter", "os", "shutil"],
	},
	{
		title: "Currency Converter",
		description:
			"A currency converter project that allows users to convert between different currencies using real-time exchange rates. It is a useful and educational tool for performing currency conversions.",
		url: "https://github.com/JorgeGarcia105/ConversorDeMoneda",
		imageUrl:
			"https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=600&q=80", // Unsplash: currency exchange
		technologies: ["Java", "Gson", "HttpClient"],
	},
	{
		title: "AI-powered Task Management Platform",
		description:
			"I developed a fullstack web application for intelligent management of academic and extracurricular tasks, with automatic prioritization through an AI microservice.\n\nModern frontend in React + Material UI, with filters, custom colors, CSV export, and integrated chatbot.\nBackend in Node.js/Express with REST API and MongoDB connection.\nAI microservice in Python (FastAPI) for advanced priority logic.\nFeatures: CRUD for tasks, extracurricular activities, notifications, filters, dynamic ordering, data export, and custom chatbot.\nProject is well-documented, modular, and ready for production/portfolio.",
		url: "https://github.com/JorgeGarcia105/gestion-tareas-ia",
		imageUrl:
			"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80", // Unsplash: tecnología/IA
		technologies: [
			"React",
			"Node.js",
			"FastAPI",
			"MongoDB",
			"Material UI",
			"Python",
			"Express",
		],
	},
];

const steps = [
	{
		selector: ".ProjectCard",
		content: "Haz clic en cualquier proyecto para ver más detalles.",
	},
];

function ProjectsContent({ projects }: { projects: Project[] }) {
	const { setIsOpen } = useTour();

	return (
		<>
			<div className="flex justify-end mb-2">
				<button
					onClick={() => setIsOpen(true)}
					className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
				>
					Guía interactiva
				</button>
			</div>
			<section
				className="p-6 bg-zinc-50 dark:bg-zinc-900 min-h-screen"
				aria-labelledby="projects-heading"
			>
				<div className="container mx-auto">
					<h1
						id="projects-heading"
						className="text-3xl font-bold mb-3 text-center text-zinc-900 dark:text-zinc-100 prose"
					>
						My Projects
					</h1>

					<div className="flex justify-center mb-6">
						<button className="px-3 py-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded shadow-sm">All Projects</button>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{projects.map((project, index) => (
						<ProjectCard
							key={index}
							title={project.title}
							description={project.description}
							url={project.url}
							imageUrl={project.imageUrl}
							technologies={project.technologies}
							className="ProjectCard" // Asegúrate de que ProjectCard acepte className
						/>
					))}
				</div>
				</div>
			</section>
		</>
	);
}

export default function Projects() {
	return (
		<TourProvider steps={steps}>
			<ProjectsContent projects={projects} />
		</TourProvider>
	);
}
