"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Youtube, Facebook } from "lucide-react"; // Asegúrate de tener los íconos necesarios

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 lg:px-16 bg-zinc-50 dark:bg-zinc-900">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-8">
        Contact Me
      </h2>

      <div className="flex justify-center gap-6">
        {/* Enlaces a tus plataformas */}
        <Button
          asChild
          className="gap-2 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          <a href="https://github.com/JorgeGarcia105" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="w-6 h-6" />
          </a>
        </Button>

        <Button
          asChild
          className="gap-2 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          <a href="https://www.linkedin.com/in/jorgegarcia105" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </a>
        </Button>

        <Button
          asChild
          className="gap-2 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          <a href="https://twitter.com/Jgarcia108" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="w-6 h-6" />
          </a>
        </Button>

        <Button
          asChild
          className="gap-2 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          <a href="https://www.youtube.com/@jgarcia105" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <Youtube className="w-6 h-6" />
          </a>
        </Button>

        <Button
          asChild
          className="gap-2 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          <a href="https://www.facebook.com/garciatorresjorgeivan10" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="w-6 h-6" />
          </a>
        </Button>
      </div>
    </section>
  );
}
