"use client";
import Image from "next/image";

const certificates = [
  {
    title: "Lógica con JS",
    issuer: "Alura Latam - ONE G7",
    imageUrl: "/images/Logica_JS.png",
  },
  {
    title: "Java Web Spring Boot",
    issuer: "Alura Latam - ONE G7",
    imageUrl: "/images/Java_Web.png",
  },
  {
    title: "Programación G7",
    issuer: "Alura Latam - ONE G7",
    imageUrl: "/images/Principiante_G7.png",
  },
  {
    title: "IA con Java",
    issuer: "Alura Latam - ONE G7",
    imageUrl: "/images/IA_Java.png",
  },
  {
    title: "Java Spring Boot",
    issuer: "Alura Latam",
    imageUrl: "/images/SpringBoot3.png",
  },
  {
    title: "Java POO",
    issuer: "Alura Latam",
    imageUrl: "/images/Java_POO.png",
  },
  {
    title: "Java & Spring Framework",
    issuer: "Alura Latam - ONE G7",
    imageUrl: "/images/Java_Spring_G7.png",
  },
  {
    title: "Java POO G7",
    issuer: "Alura Latam - ONE G7",
    imageUrl: "/images/Java_POO_G7.png",
  },
  {
    title: "Agilidad y Emprendimiento",
    issuer: "Alura Latam - ONE G7",
    imageUrl: "/images/Agilidad_Emprende.png",
  },
  {
    title: "Desarrollo Personal",
    issuer: "Alura Latam - ONE G7",
    imageUrl: "/images/Desarrollo_Personal.png",
  },
  {
    title: "Git & GitHub",
    issuer: "Alura Latam",
    imageUrl: "/images/GitHub.png",
  },
  {
    title: "HTML & CSS",
    issuer: "Alura Latam",
    imageUrl: "/images/HTML_CSS.png",
  },
  {
    title: "ChatGPT Productividad",
    issuer: "Alura Latam",
    imageUrl: "/images/ChatGPT.png",
  },
  {
    title: "Challenge Encriptador",
    issuer: "Alura Latam",
    imageUrl: "/images/Encriptador.png",
  },
  {
    title: "Challenge Literalura",
    issuer: "Alura Latam",
    imageUrl: "/images/Literalura.png",
  },
  {
    title: "Challenge Foro Hub",
    issuer: "Alura Latam",
    imageUrl: "/images/ForoHub.png",
  },
  {
    title: "Challenge Conversor",
    issuer: "Alura Latam",
    imageUrl: "/images/ConversorMoneda.png",
  },
  {
    title: "IA Generativa - ONE",
    issuer: "Alura Latam - ONE",
    imageUrl: "/images/IA_Generativa.png",
  },
  {
    title: "Oracle Cloud Infrastructure - ONE",
    issuer: "Alura Latam - ONE",
    imageUrl: "/images/Oracle_Cloud.png",
  },
  {
    title: "SQL con MySQL Server - ONE",
    issuer: "Alura Latam - ONE",
    imageUrl: "/images/SQL_MySQL.png",
  },
  {
    title: "PLAN DE ESTUDIO ONE - Alumni",
    issuer: "Alura Latam - Oracle Next Education",
    imageUrl: "/images/Plan_ONE_Alumni.png",
  }
];

export default function Certificates() {
  return (
    <section className="py-12 px-6 lg:px-16 bg-zinc-50 dark:bg-zinc-900">
      <h2 className="text-3xl font-bold text-center mb-8 text-zinc-900 dark:text-zinc-100">
        Certificates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-zinc-800"
          >
            <div className="relative w-full aspect-[4/3] bg-zinc-100 dark:bg-zinc-700">
              <Image
                src={cert.imageUrl}
                alt={cert.title}
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                {cert.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {cert.issuer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
