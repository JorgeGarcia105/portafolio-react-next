"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import { useState } from "react";

const posts = [
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
	{
		title: "Getting Started with Docker for Developers",
		date: "2025-05-01",
		summary: "A beginner-friendly introduction to containerization and Docker for backend projects.",
		slug: "docker-for-developers",
		tags: ["Docker", "Containerization", "DevOps"],
	},
];

// Obtener todos los tags únicos
const allTags = Array.from(
	new Set(posts.flatMap((post) => post.tags))
).sort();

export default function Blog() {
	const [selectedTag, setSelectedTag] = useState<string | null>(null);

	const filteredPosts = selectedTag
		? posts.filter((post) => post.tags.includes(selectedTag))
		: posts;

	return (
		<section className="blog-section max-w-3xl mx-auto py-12 px-4 sm:px-8">
			<h1 className="flex items-center gap-3 text-4xl font-extrabold text-blue-700 mb-6">
				<BookOpen className="w-8 h-8" /> Blog
			</h1>
			<p className="mb-8 text-zinc-600 dark:text-zinc-400 text-lg">
				Welcome to my blog! Here I share tutorials, tips, and experiences about backend development, databases, and software engineering.
			</p>

			{/* Categorías visuales */}
			<div className="flex flex-wrap gap-2 mb-10">
				<button
					onClick={() => setSelectedTag(null)}
					className={`px-3 py-1 rounded-full text-sm font-semibold border transition ${
						!selectedTag
							? "bg-blue-700 text-white border-blue-700"
							: "bg-blue-100 text-blue-700 border-blue-100 hover:bg-blue-200"
					}`}
				>
					All
				</button>
				{allTags.map((tag) => (
					<button
						key={tag}
						onClick={() => setSelectedTag(tag)}
						className={`px-3 py-1 rounded-full text-sm font-semibold border transition ${
							selectedTag === tag
								? "bg-blue-700 text-white border-blue-700"
								: "bg-blue-100 text-blue-700 border-blue-100 hover:bg-blue-200"
						}`}
					>
						{tag}
					</button>
				))}
			</div>

			<ul className="space-y-10">
				{filteredPosts.length === 0 && (
					<li className="text-zinc-500 text-center">No posts found for this category.</li>
				)}
				{filteredPosts.map((post, idx) => (
					<li
						key={post.slug}
						className="group bg-white dark:bg-zinc-900 rounded-xl shadow border border-zinc-100 dark:border-zinc-800 transition hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-700"
					>
						<div className="p-6">
							<h2 className="text-2xl font-bold text-blue-700 mb-1 group-hover:underline">
								<Link
									href={`/blog/${post.slug}`}
									className="focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
								>
									{post.title}
								</Link>
							</h2>
							<p className="text-sm text-zinc-500 mb-2">
								{new Date(post.date).toLocaleDateString("en-US", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							</p>
							<div className="flex flex-wrap gap-2 mb-2">
								{post.tags?.map((tag) => (
									<span
										key={tag}
										className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
											selectedTag === tag
												? "bg-blue-700 text-white"
												: "bg-blue-100 text-blue-700"
										}`}
									>
										{tag}
									</span>
								))}
							</div>
							<p className="text-zinc-700 dark:text-zinc-300 mb-4">{post.summary}</p>
							<Link
								href={`/blog/${post.slug}`}
								className="inline-block text-blue-700 font-semibold hover:underline transition"
								aria-label={`Read more about ${post.title}`}
							>
								Read more &rarr;
							</Link>
						</div>
						{idx < filteredPosts.length - 1 && (
							<hr className="mx-6 border-zinc-200 dark:border-zinc-700" />
						)}
					</li>
				))}
			</ul>
		</section>
	);
}