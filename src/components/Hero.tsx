"use client";
import { Button } from "@/components/ui/button";
import { Download, Mail, Eye } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-16 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-24 bg-zinc-50 dark:bg-zinc-900">
      
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.6
        }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center lg:text-left max-w-2xl"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white mb-4 leading-tight">
          Jorge Iván García Torres
        </h1>
        
        <motion.h2 
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Backend Developer · Systems Engineering Student
        </motion.h2>
        
        <motion.p
          className="text-base sm:text-lg lg:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          I specialize in building <strong className="text-blue-600 dark:text-blue-400">scalable backend systems</strong> using 
          Java, Spring Boot, and cloud technologies. Passionate about clean architecture 
          and <em>efficient code</em>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            asChild
            className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95"
          >
            <a 
              href="/docs/CV_Jorge_Garcia.pdf" 
              download
              aria-label="Download CV in PDF format"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="gap-2 text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-zinc-900 transition-all hover:scale-[1.02] active:scale-95"
          >
            <a 
              href="mailto:garciatorresjorgeivan10@gmail.com" 
              aria-label="Contact via email"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* 3D Flip Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.6
        }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-64 h-96 perspective"
      >
        <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-180">
          {/* Front Side */}
          <div className="absolute w-full h-full backface-hidden rounded-2xl shadow-xl overflow-hidden border-2 border-blue-200 dark:border-blue-800">
            <Image
              src="/images/avatar2.png"
              alt="Jorge García - Backend Developer"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
              blurDataURL="/images/avatar.png"
            />
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-white dark:bg-zinc-800 rounded-2xl p-6 flex flex-col justify-between border-2 border-blue-200 dark:border-blue-800 shadow-xl">
            <div>
              <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">
                Spring Boot Certification
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-2">
                Advanced training in REST APIs, JPA, Spring Security, and cloud deployment with AWS.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Button 
                asChild 
                className="gap-2 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <a
                  href="/docs/Certificado_Backend.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View certification PDF"
                >
                  <Eye className="w-4 h-4" />
                  View PDF
                </a>
              </Button>

              <Button 
                asChild 
                variant="outline" 
                className="gap-2 text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400"
              >
                <a 
                  href="/docs/Certificado_Backend.pdf" 
                  download
                  aria-label="Download certification"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}