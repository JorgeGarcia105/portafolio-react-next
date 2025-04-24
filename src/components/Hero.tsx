"use client";

import { Button } from "@/components/ui/button";
import { Download, Mail, Eye } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-20 px-6 lg:px-24 bg-zinc-50 dark:bg-zinc-900">
      
      {/* Texto principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center lg:text-left max-w-2xl"
      >
        <h1 className="text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white mb-4">
          Jorge Iván García Torres
        </h1>
        <h2 className="text-2xl lg:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
          Backend Developer · Systems Engineering Student
        </h2>
        <p className="text-lg lg:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8">
          Discover my certifications and skills in <strong>Java, Spring Boot, PostgreSQL, React</strong> and more. I build robust APIs and systems with <em>clean code</em> and modern architecture.
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button
            asChild
            className="gap-2 bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <a href="/docs/CV_Jorge_Garcia.pdf" download aria-label="Download CV">
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="gap-2 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <a href="mailto:garciatorresjorgeivan10@gmail.com" aria-label="Contact Jorge via email">
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
          </Button>
        </div>
      </motion.div>

      {/* Flip card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-64 h-96 perspective"
      >
        <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-180">
          
          {/* Cara frontal */}
          <div className="absolute w-full h-full backface-hidden rounded-2xl shadow-xl overflow-hidden border-2 border-blue-200 dark:border-blue-800">
            <Image
              src="/images/avatar2.png"
              alt="Avatar or certificate preview"
              fill
              className="object-cover"
              sizes="256px"
            />
          </div>

          {/* Cara trasera */}
          <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-white dark:bg-zinc-800 rounded-2xl p-6 flex flex-col justify-between border-2 border-blue-200 dark:border-blue-800 shadow-xl">
            <div>
              <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">
                Certificado: Backend con Spring Boot
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-2">
                Formación en desarrollo backend moderno con Spring Boot, API REST, JPA y PostgreSQL. Incluye despliegue en la nube y pruebas automatizadas.
              </p>
            </div>

            <div className="flex gap-3 mt-4">
              <Button asChild className="gap-2 text-white bg-blue-600 hover:bg-blue-700">
                <a
                  href="/docs/Certificado_Backend.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View backend certification"
                >
                  <Eye className="w-4 h-4" />
                  Ver PDF
                </a>
              </Button>

              <Button asChild variant="outline" className="gap-2">
                <a href="/docs/Certificado_Backend.pdf" download aria-label="Download backend certification">
                  <Download className="w-4 h-4" />
                  Descargar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
