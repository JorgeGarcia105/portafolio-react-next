"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Lógica con JS",
    issuer: "Alura Latam - ONE G7",
    imageUrl: "/images/Logica_JS.png",
    imageRes: "/images/Logica_JS_Datos.png",
  },
  {
    title: "Java Web Spring Boot",
    issuer: "Alura Latam - ONE G7",
    imageUrl: "/images/Java_Web.png",
    imageRes: "/images/Java_Web_Datos.png",
  },
  {
    title: "Programación G7",
    issuer: "Alura Latam - ONE G7",
    imageUrl: "/images/Principiante_G7.png",
    imageRes: "/images/Principiante_G7_Datos.png",
  },
  {
    title: "IA con Java",
    issuer: "Alura Latam - ONE G7",
    imageUrl: "/images/IA_Java.png",
    imageRes: "/images/IA_Java_Datos.png",
  },
  {
    title: "Java Spring Boot",
    issuer: "Alura Latam",
    imageUrl: "/images/SpringBoot3.png",
    imageRes: "/images/SpringBoot3_Datos.png",
  },
  {
    title: "Java POO",
    issuer: "Alura Latam",
    imageUrl: "/images/Java_POO.png",
    imageRes: "/images/Java_POO_Datos.png",
  },
  {
    title: "Java & Spring Framework",
    issuer: "Alura Latam - ONE G7",
    imageUrl: "/images/Java_Spring_G7.png",
    imageRes: "/images/Java_Spring_G7_Datos.png",
  },
  {
    title: "Java POO G7",
    issuer: "Alura Latam - ONE G7",
    imageUrl: "/images/Java_POO_G7.png",
    imageRes: "/images/Java_POO_G7_Datos.png",
  },
  {
    title: "Agilidad y Emprendimiento",
    issuer: "Alura Latam - ONE G7",
    imageUrl: "/images/Agilidad_Emprende.png",
    imageRes: "/images/Agilidad_Emprende_Datos.png",
  },
  {
    title: "Desarrollo Personal",
    issuer: "Alura Latam - ONE G7",
    imageUrl: "/images/Desarrollo_Personal.png",
    imageRes: "/images/Desarrollo_Personal_Datos.png",
  },
  {
    title: "Git & GitHub",
    issuer: "Alura Latam",
    imageUrl: "/images/GitHub.png",
    imageRes: "/images/GitHub_Datos.png",
  },
  {
    title: "ChatGPT Productividad",
    issuer: "Alura Latam",
    imageUrl: "/images/ChatGPT.png",
    imageRes: "/images/ChatGPT_Datos.png",
  },
  {
    title: "Challenge Encriptador",
    issuer: "Alura Latam",
    imageUrl: "/images/Encriptador.png",
    imageRes: "/images/Encriptador_Datos.png",
  },
  {
    title: "Challenge Literalura",
    issuer: "Alura Latam",
    imageUrl: "/images/Literalura.png",
    imageRes: "/images/Literalura_Datos.png",
  },
  {
    title: "Challenge Foro Hub",
    issuer: "Alura Latam",
    imageUrl: "/images/ForoHub.png",
    imageRes: "/images/ForoHub_Datos.png",
  },
  {
    title: "Challenge Conversor",
    issuer: "Alura Latam",
    imageUrl: "/images/ConversorMoneda.png",
    imageRes: "/images/Conversor_Datos.png",
  },
  {
    title: "IA Generativa - ONE",
    issuer: "Alura Latam - ONE",
    imageUrl: "/images/IA_Generativa.png",
    imageRes: "/images/IA_Generativa_Datos.png",
  },
  {
    title: "Oracle Cloud Infrastructure - ONE",
    issuer: "Alura Latam - ONE",
    imageUrl: "/images/Oracle_Cloud.png",
    imageRes: "/images/Oracle_Cloud_Datos.png",
  },
  {
    title: "SQL con MySQL Server - ONE",
    issuer: "Alura Latam - ONE",
    imageUrl: "/images/SQL_MySQL.png",
    imageRes: "/images/SQL_MySQL_Datos.png",
  },
  {
    title: "PLAN DE ESTUDIO ONE - Alumni",
    issuer: "Alura Latam - Oracle Next Education",
    imageUrl: "/images/Plan_ONE_Alumni.png",
    imageRes: "/images/Plan_ONE_Alumni_Datos.png",
  },
];

export default function Certificates() {
  return (
    <section className="py-12 px-6 lg:px-16 bg-zinc-50 dark:bg-zinc-900">
      <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-100">
        🎓 Certificates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="relative perspective group"
          >
            {/* Flip Card */}
            <motion.div
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-zinc-800 transform-style preserve-3d transition-transform duration-700 group-hover:rotate-y-180"
            >
              {/* Front Face */}
              <div className="absolute w-full h-full backface-hidden">
                <Image
                  src={cert.imageUrl}
                  alt={`Certificado de ${cert.title}`}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Back Face */}
              <div className="absolute w-full h-full rotate-y-180 backface-hidden flex flex-col rounded-2xl bg-white dark:bg-zinc-800">
                <div className="relative flex-1 bg-zinc-100 dark:bg-zinc-700">
                  <Image
                    src={cert.imageRes || cert.imageUrl}
                    alt={`Detalles de ${cert.title}`}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-100">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group-hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
