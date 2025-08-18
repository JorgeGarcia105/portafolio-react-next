"use client";

import { TourProvider, Tour } from "@reactour/tour";
import { usePathname } from "next/navigation";
import { useTourContext } from "./TourContext";
import { SetStateAction, useEffect, useState } from "react";
import { useTheme } from "next-themes";

const steps = [
  {
    selector: "nav",
    content: "Use this navigation bar to explore the main sections of my portfolio.",
    route: "all",
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
  const { theme } = useTheme();

  // Siempre incluye nav + pasos de la ruta actual
  const filteredSteps = [
    steps[0],
    ...steps.filter((step, idx) => step.route === pathname && idx !== 0),
  ];

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const accentColor = theme === "dark" ? "#60a5fa" : "#4F46E5";

  return (
    <TourProvider steps={filteredSteps}>
      {mounted && (
        <Tour
          steps={filteredSteps}
          isOpen={isOpen}
          currentStep={currentStep}
          setIsOpen={(value) => setIsOpen(typeof value === "function" ? value(isOpen) : value)}
          setCurrentStep={(value) => setCurrentStep(typeof value === "function" ? value(currentStep) : value)}
          disableDotsNavigation
          disableKeyboardNavigation
          disableFocusLock
          disableInteraction
          className="tour-wrapper"
          styles={{
            popover: () => ({
              backgroundColor: theme === "dark" ? "#18181b" : "#fff",
              color: theme === "dark" ? "#fff" : "#18181b",
            }),
            controls: () => ({
              color: accentColor,
            }),
            badge: () => ({
              backgroundColor: accentColor,
            }),
          }} disabledActions={false} setDisabledActions={function (value: SetStateAction<boolean>): void {
            throw new Error("Function not implemented.");
          } }        />
      )}
      {children}
    </TourProvider>
  );
}
