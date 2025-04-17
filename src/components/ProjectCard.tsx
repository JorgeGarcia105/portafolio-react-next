import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

export default function ProjectCard({
  title,
  description,
  url,
  imageUrl,
}: ProjectCardProps) {
  return (
    <Link
      href={url}
      target="_blank"
      className="group block rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
    >
      {/* Contenedor de imagen con altura fija */}
      <div className="relative w-full h-80 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Contenido del proyecto */}
      <div className="p-4 min-h-[120px] flex flex-col justify-between">
        <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
          {title}
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
          {description}
        </p>
      </div>
    </Link>
  );
}
