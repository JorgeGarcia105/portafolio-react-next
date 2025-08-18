"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail, Eye, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="hero-section relative flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-16 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-24 bg-zinc-50 dark:bg-zinc-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 blur-3xl" aria-hidden="true"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 blur-3xl" aria-hidden="true"></div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.6,
        }}
        className="text-center lg:text-left max-w-2xl relative z-10"
      >
        <motion.h1
          id="hero-heading"
          className="text-5xl font-extrabold text-zinc-900 dark:text-white mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Jorge Iván García Torres
        </motion.h1>

        <motion.h2
          className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Backend Developer · Systems Engineering Student
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg lg:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I specialize in building{" "}
          <strong className="text-blue-600 dark:text-blue-400 font-medium">
            scalable backend systems
          </strong>{" "}
          using modern technologies like Java, Spring Boot, and cloud platforms.
          Passionate about{" "}
          <strong className="text-blue-600 dark:text-blue-400 font-medium">
            clean architecture
          </strong>{" "}
          and
          <em className="font-medium"> efficient code solutions</em>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          role="group"
          aria-label="Acciones principales"
        >
          <Button
            asChild
            className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-95 focus-visible:ring-4 focus-visible:ring-blue-400"
          >
            <a
              href="/docs/CV_Jorge_Garcia.pdf"
              download="CV_Jorge_Garcia.pdf"
              aria-label="Descargar CV en formato PDF"
            >
              <Download className="w-5 h-5" aria-hidden="true" />
              Download CV
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="gap-2 text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-zinc-900 transition-all duration-300 hover:scale-[1.03] active:scale-95 focus-visible:ring-4 focus-visible:ring-blue-400"
          >
            <a
              href="mailto:garciatorresjorgeivan10@gmail.com"
              aria-label="Contactar por email"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              Contact Me
            </a>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="gap-2 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-[1.03] active:scale-95 focus-visible:ring-4 focus-visible:ring-blue-400"
          >
            <Link href="/projects" aria-label="Ver mis proyectos">
              <ExternalLink className="w-5 h-5" aria-hidden="true" />
              View Projects
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* 3D Flip Card mejorada */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.6,
          delay: 0.2,
        }}
        className="w-64 h-96 perspective relative z-10"
        role="img"
        aria-label="Tarjeta interactiva con foto profesional y certificación"
      >
        <div
          className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${
            flipped ? "rotate-y-180" : ""
          } group cursor-pointer`}
          tabIndex={0}
          onClick={() => setFlipped((f) => !f)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setFlipped((f) => !f);
          }}
          aria-label={
            flipped
              ? "Ver foto profesional"
              : "Ver certificación Spring Boot"
          }
        >
          {/* Front Side */}
          <div className="absolute w-full h-full backface-hidden rounded-2xl shadow-lg overflow-hidden border-2 border-blue-200 dark:border-blue-800 transition-all duration-700">
            <Image
              src="/images/avatar2.png"
              alt="Jorge Iván García Torres - Backend Developer"
              width={256}
              height={384}
              className="object-cover w-full h-full rounded-2xl border-4 border-blue-600 shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full backface-hidden bg-white dark:bg-zinc-800 rounded-2xl p-6 flex flex-col justify-between border-2 border-blue-200 dark:border-blue-800 shadow-lg rotate-y-180 transition-all duration-700 opacity-100">
            <div>
              <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                <span role="img" aria-label="Certificado">🎓</span> Spring Boot Certification
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Advanced training in REST APIs, JPA, Spring Security, and cloud deployment with AWS.
              </p>
              <div className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full font-semibold tracking-wide">
                  ✓ Certified
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <Button
                asChild
                size="sm"
                className="gap-2 bg-blue-600 hover:bg-blue-700 text-white transition-colors focus-visible:ring-4 focus-visible:ring-blue-400"
              >
                <a
                  href="/docs/Certificado_Backend.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver certificación en PDF (se abre en nueva pestaña)"
                >
                  <Eye className="w-4 h-4" aria-hidden="true" />
                  View PDF
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="sm"
                className="gap-2 text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-zinc-900 transition-colors focus-visible:ring-4 focus-visible:ring-blue-400"
              >
                <a
                  href="/docs/Certificado_Backend.pdf"
                  download="Spring_Boot_Certification_Jorge_Garcia.pdf"
                  aria-label="Descargar certificación"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  Download
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Estilos CSS para el flip card */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}