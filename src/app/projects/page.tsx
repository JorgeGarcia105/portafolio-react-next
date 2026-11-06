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

// Proyectos reales de GitHub del estudiante
const projects: Project[] = [
	{
		title: "Foro Hub",
		description:
			"API REST para gestión de foros en línea con operaciones CRUD, autenticación JWT, validaciones de negocio y persistencia en PostgreSQL usando Spring Data JPA.",
		url: "https://github.com/JorgeGarcia105/ForoHub",
		imageUrl:
			"https://images.unsplash.com/photo-1547658719-da2b511fd91b?auto=format&fit=crop&w=600&q=80",
		technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Spring Data JPA"],
	},
	{
		title: "LiterAlura",
		description:
			"Catálogo de libros interactivo en Java que consume la API externa Gutendex, permite consultas y filtros, y almacena los datos en PostgreSQL.",
		url: "https://github.com/JorgeGarcia105/LiterAlura",
		imageUrl:
			"https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
		technologies: ["Java", "Spring Boot", "PostgreSQL", "API Gutendex", "JSON"],
	},
	{
		title: "GestionHorario",
		description:
			"Generador automático de horarios académicos sin conflictos de clases. Permite definir opciones semanales por materia y genera combinaciones válidas dentro de un rango de créditos, con reglas de exclusión entre materias.",
		url: "https://github.com/JorgeGarcia105/GestionHorario",
		imageUrl:
			"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
		technologies: ["Python", "Flask", "SQLite", "Backtracking", "Algoritmos"],
	},
	{
		title: "Complexity-Analyzer",
		description:
			"Analizador automático de complejidad algorítmica con razonamiento detallado, trazas de ejecución y técnicas avanzadas: Teorema Maestro, Sustitución y Árboles de Recursión.",
		url: "https://github.com/JorgeGarcia105/Complexity-Analyzer",
		imageUrl:
			"https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
		technologies: ["Python", "Análisis de Complejidad", "Algoritmos", "Teorema Maestro"],
	},
	{
		title: "Simulador-Computador",
		description:
			"Simulador interactivo de arquitectura de computador: CPU, RAM, ROM, Buses, Entrada/Salida y Disco. Construido con React para explorar conceptos fundamentales de la informática.",
		url: "https://github.com/JorgeGarcia105/Simulador-Computador",
		imageUrl:
			"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
		technologies: ["JavaScript", "React", "Arquitectura de Computadoras"],
	},
	{
		title: "Conversor de Moneda",
		description:
			"Aplicación que permite convertir monedas en tiempo real y consultar tasas históricas consumiendo una API externa de tipos de cambio.",
		url: "https://github.com/JorgeGarcia105/ConversorDeMoneda",
		imageUrl:
			"https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=600&q=80",
		technologies: ["Java", "API ExchangeRate", "HttpClient", "Gson"],
	},
	{
		title: "Laberinto",
		description:
			"Programa en Python que resuelve laberintos cargados desde un archivo CSV utilizando algoritmos de búsqueda A* y BFS, con visualización de las rutas encontradas usando matplotlib y colorama.",
		url: "https://github.com/JorgeGarcia105/Laberinto",
		imageUrl:
			"https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
		technologies: ["Python", "Pygame", "A*", "BFS", "matplotlib", "colorama"],
	},
	{
		title: "ms-seguridad-ventas-2024",
		description:
			"Microservicio para la seguridad del servicio de ventas, implementando autenticación y autorización para proteger los endpoints del negocio.",
		url: "https://github.com/JorgeGarcia105/ms-seguridad-ventas-2024",
		imageUrl:
			"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
		technologies: ["TypeScript", "Microservicios", "Seguridad", "Autenticación"],
	},
	{
		title: "FunerariaDigital-ms-seguridad",
		description:
			"Creación del microservicio de seguridad de una Funeraria Digital, incluyendo autenticación de dos factores (2FA) y sistema de notificaciones por correo y SMS.",
		url: "https://github.com/JorgeGarcia105/FunerariaDigital-ms-seguridad",
		imageUrl:
			"https://images.unsplash.com/photo-1531297553717-02396e51509c?auto=format&fit=crop&w=600&q=80",
		technologies: ["TypeScript", "Microservicios", "2FA", "Notificaciones"],
	},
	{
		title: "FunerariaDigital-ms-notificaciones",
		description:
			"Microservicio de notificaciones vía email (AWS SES) y mensaje de texto (SNS) para la plataforma de Funeraria Digital.",
		url: "https://github.com/JorgeGarcia105/FunerariaDigital-ms-notificaciones",
		imageUrl:
			"https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
		technologies: ["C#", "AWS SES", "SNS", "Microservicios"],
	},
	{
		title: "backend-ventas-2024",
		description:
			"Backend para sistema de ventas con arquitectura de microservicios y lógica de negocios separada.",
		url: "https://github.com/JorgeGarcia105/backend-ventas-2024",
		imageUrl:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
		technologies: ["TypeScript", "Backend", "Ventas", "Microservicios"],
	},
	{
		title: "ms-logica-negocio-ventas-2024",
		description:
			"Microservicio de lógica de negocios para el sistema de ventas, separando la capa de presentación de la capa de reglas de negocio.",
		url: "https://github.com/JorgeGarcia105/ms-logica-negocio-ventas-2024",
		imageUrl:
			"https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80",
		technologies: ["TypeScript", "Lógica de Negocio", "Microservicios"],
	},
	{
		title: "portafolio-react-next",
		description:
			"Portafolio personal desarrollado con React y Next.js 13+, desplegado en Vercel. Muestra perfil profesional, certificaciones, proyectos y experiencia como desarrollador backend.",
		url: "https://github.com/JorgeGarcia105/portafolio-react-next",
		imageUrl:
			"https://images.unsplash.com/photo-1460925895917-afaf65ae8d64?auto=format&fit=crop&w=600&q=80",
		technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Vercel"],
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
