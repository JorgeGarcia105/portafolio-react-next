"use client";
import { TourProvider, Tour } from "@reactour/tour";
import { usePathname } from "next/navigation";
import { useTourContext } from "./TourContext";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes"; // Importa el hook de tema

const steps = [
  {
    selector: "nav",
    content: "Use this navigation bar to explore the main sections of my portfolio.",
    route: "all", // Cambia la ruta a "all" para identificarlo como global
  },
  {
    selector: ".hero-section",
    content: "Welcome! Here you can see my introduction and main highlights.",
    route: "/",
  },
  {
    selector: ".about-section",
    content: "Learn more about me in this section.",
    route: "/about",
  },
  {
    selector: ".skills-section",
    content: "These are my main technical and soft skills.",
    route: "/skills",
  },
  {
    selector: ".projects-section",
    content: "Here are some of the projects I've worked on.",
    route: "/projects",
  },
  {
    selector: ".certificates-section",
    content: "Check out my certifications and achievements.",
    route: "/certificates",
  },
  {
    selector: ".contact-section",
    content: "Feel free to contact me through this form.",
    route: "/contact",
  },
  {
    selector: ".cv-section",
    content: "Download my CV here.",
    route: "/cv",
  },
  {
    selector: ".blog-section",
    content: "Read my latest blog posts and articles.",
    route: "/blog",
  },
];

export default function TourWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isOpen, setIsOpen, currentStep, setCurrentStep } = useTourContext();
  const { theme } = useTheme(); // Obtiene el tema actual

  // Siempre incluye el paso de la barra de navegación + los pasos de la ruta actual
  const filteredSteps = [
    steps[0],
    ...steps.filter((step, idx) => step.route === pathname && idx !== 0),
  ];

  // Solo renderiza <Tour /> en el cliente
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Define colores según el tema
  const accentColor = theme === "dark" ? "#60a5fa" : "#4F46E5"; // azul claro para dark, azul fuerte para light
  const maskColor = theme === "dark"
    ? "rgba(24, 24, 27, 0.85)" // fondo oscuro para dark
    : "rgba(0, 0, 0, 0.5)";    // fondo oscuro para light

  return (
    <TourProvider steps={filteredSteps}>
      {mounted && (
        <Tour
          steps={filteredSteps}
          isOpen={isOpen}
          step={currentStep}
          setStep={setCurrentStep}
          onRequestClose={() => setIsOpen(false)}
          onStepChange={(step: number) => setCurrentStep(step)}
          disableDotsNavigation
          disableKeyboardNavigation
          disableFocusLock
          disableInteraction
          closeWithMask={false}
          accentColor={accentColor}
          className="tour-wrapper"
          styles={{
            mask: { backgroundColor: maskColor },
            popover: {
              background: theme === "dark" ? "#18181b" : "#fff",
              color: theme === "dark" ? "#fff" : "#18181b",
            },
            // Puedes agregar más estilos aquí si lo deseas
          }}
        />
      )}
      {children}
    </TourProvider>
  );
}
