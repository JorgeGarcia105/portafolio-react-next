import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  description,
  url,
  imageUrl,
  technologies,
}: ProjectCardProps) {
  return (
    <Link
      href={url}
      target="_blank"
      className="group block rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
      aria-label={`View project: ${title}`}
    >
      {/* Imagen del proyecto */}
      <div className="relative w-full h-80 sm:h-64 md:h-72 overflow-hidden group-hover:shadow-xl">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={true}
        />
      </div>

      {/* Contenido */}
      <div className="p-4 min-h-[150px] flex flex-col justify-between">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-amber-700">
          {title}
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2">
          {description}
        </p>
        <ul className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech, i) => (
            <li
              key={i}
              className="bg-zinc-600 dark:bg-zinc-100 text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
