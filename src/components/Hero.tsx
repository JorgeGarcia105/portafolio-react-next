"use client";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 py-12 px-6 lg:px-16">
      {/* Texto */}
      <div className="text-center lg:text-left max-w-xl">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-zinc-900 dark:text-zinc-100">
          Jorge Iván García Torres
        </h1>
        <h2 className="text-xl lg:text-2xl font-medium text-zinc-600 dark:text-zinc-400 mb-4">
          Backend Developer | Systems Engineering Student
        </h2>
        <p className="text-base lg:text-lg text-zinc-700 dark:text-zinc-300 mb-6">
          I build scalable and reliable backend systems using Java, Spring Boot,
          Python, Docker, and more. Passionate about learning, clean code, and
          creating innovative solutions.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button
            asChild
            className="gap-2 bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
          >
            <a href="/docs/CV_Jorge_Garcia.pdf" download>
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="gap-2 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300"
          >
            <a href="mailto:jorgarciatorres@outlook.com">
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
          </Button>
        </div>
      </div>

      {/* Imagen */}
      <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden relative border-4 border-zinc-200 dark:border-zinc-800 shadow-xl transform transition duration-300 hover:scale-105">
        <Image
          src="/images/avatar.png"
          alt="Jorge Iván García Torres"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
