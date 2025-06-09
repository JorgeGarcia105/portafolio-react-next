"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Youtube, Facebook, Mail } from "lucide-react";

// Redes sociales en array para fácil mantenimiento
const socialLinks = [
	{
		href: "https://github.com/JorgeGarcia105",
		label: "GitHub",
		icon: Github,
		color:
			"text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white",
	},
	{
		href: "https://www.linkedin.com/in/jorgegarcia105",
		label: "LinkedIn",
		icon: Linkedin,
		color:
			"text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white",
	},
	{
		href: "https://twitter.com/Jgarcia108",
		label: "Twitter",
		icon: Twitter,
		color:
			"text-sky-500 border-sky-500 hover:bg-sky-500 hover:text-white",
	},
	{
		href: "https://www.youtube.com/@jgarcia105",
		label: "YouTube",
		icon: Youtube,
		color:
			"text-red-600 border-red-600 hover:bg-red-600 hover:text-white",
	},
	{
		href: "https://www.facebook.com/garciatorresjorgeivan10",
		label: "Facebook",
		icon: Facebook,
		color:
			"text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white",
	},
];

export default function Contact() {
	// Estado para feedback del formulario
	const [formState, setFormState] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");

	// Manejar envío del formulario
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setFormState("loading");
		const form = e.currentTarget;
		const data = new FormData(form);

		// Cambia la URL de Formspree por la tuya
		const res = await fetch("https://formspree.io/f/xwkgrwqg", {
			method: "POST",
			body: data,
			headers: { Accept: "application/json" },
		});

		if (res.ok) {
			setFormState("success");
			form.reset();
		} else {
			setFormState("error");
		}
	}

	return (
		<section
			id="contact"
			className="py-16 px-6 lg:px-16 bg-zinc-50 dark:bg-zinc-900"
			aria-labelledby="contact-heading"
		>
			<h2
				id="contact-heading"
				className="text-3xl lg:text-4xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-8"
			>
				Contáctame
			</h2>

			{/* Redes sociales */}
			<nav
				aria-label="Redes sociales"
				className="flex justify-center gap-6 mb-12"
			>
				{socialLinks.map(({ href, label, icon: Icon, color }) => (
					<Button
						asChild
						key={label}
						className={`gap-2 border-2 ${color} transition-all duration-300 focus-visible:ring-4 focus-visible:ring-blue-400`}
					>
						<a
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={label}
							title={label}
						>
							<Icon className="w-6 h-6" aria-hidden="true" />
							<span className="sr-only">{label}</span>
						</a>
					</Button>
				))}
			</nav>

			{/* Formulario de contacto */}
			<div className="max-w-xl mx-auto bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8">
				<form
					className="flex flex-col gap-6"
					onSubmit={handleSubmit}
					aria-label="Formulario de contacto"
				>
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-zinc-700 dark:text-zinc-200 mb-1"
						>
							Nombre
						</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							className="w-full rounded-lg border border-zinc-300 dark:border-zinc-600 px-4 py-2 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
							autoComplete="name"
						/>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-zinc-700 dark:text-zinc-200 mb-1"
						>
							Correo electrónico
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							className="w-full rounded-lg border border-zinc-300 dark:border-zinc-600 px-4 py-2 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
							autoComplete="email"
						/>
					</div>
					<div>
						<label
							htmlFor="message"
							className="block text-sm font-medium text-zinc-700 dark:text-zinc-200 mb-1"
						>
							Mensaje
						</label>
						<textarea
							id="message"
							name="message"
							rows={5}
							required
							className="w-full rounded-lg border border-zinc-300 dark:border-zinc-600 px-4 py-2 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
						/>
					</div>
					<Button
						type="submit"
						className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-60"
						disabled={formState === "loading"}
					>
						<Mail className="w-5 h-5" />
						{formState === "loading" ? "Enviando..." : "Enviar mensaje"}
					</Button>
					{formState === "success" && (
						<p
							className="text-green-600 dark:text-green-400 text-center mt-2"
							role="status"
						>
							¡Mensaje enviado correctamente!
						</p>
					)}
					{formState === "error" && (
						<p
							className="text-red-600 dark:text-red-400 text-center mt-2"
							role="alert"
						>
							Ocurrió un error. Intenta nuevamente.
						</p>
					)}
				</form>
			</div>
		</section>
	);
}
