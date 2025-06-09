import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

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
  const isGithubLink = url.includes("github.com");

  return (
    <article className="group h-full rounded-xl overflow-hidden bg-white dark:bg-zinc-800 shadow-lg hover:shadow-2xl dark:hover:shadow-zinc-700/50 transition-all duration-300 hover:-translate-y-2 border border-zinc-200 dark:border-zinc-700">
      {/* Project Image with overlay */}
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

        {/* Link icon overlay */}
        <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm p-2 rounded-full">
            {isGithubLink ? (
              <Github className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
            ) : (
              <ExternalLink className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
            )}
          </div>
        </div>

        <Image
          src={imageUrl}
          alt={`Captura del proyecto ${title}`}
          width={600}
          height={400}
          className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+"
        />
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
            {title}
          </h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Technology Tags */}
        <div className="pt-2">
          <ul
            className="flex flex-wrap gap-2"
            role="list"
            aria-label={`Tecnologías usadas en ${title}`}
          >
            {technologies.map((tech) => (
              <li key={tech}>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to action */}
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-800 rounded"
          aria-label={`Ver proyecto ${title} (se abre en nueva pestaña)`}
        >
          {isGithubLink ? (
            <>
              <Github className="w-4 h-4" />
              Ver en GitHub
            </>
          ) : (
            <>
              <ExternalLink className="w-4 h-4" />
              Ver proyecto
            </>
          )}
        </Link>
      </div>
    </article>
  );
}