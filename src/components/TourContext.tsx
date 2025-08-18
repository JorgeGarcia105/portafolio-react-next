"use client";
import { createContext, useContext, useState } from "react";

type TourContextType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
};

const TourContext = createContext<TourContextType | undefined>(undefined);

export function TourContextProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false); // <-- Debe iniciar en false
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <TourContext.Provider value={{ isOpen, setIsOpen, currentStep, setCurrentStep }}>
      {children}
    </TourContext.Provider>
  );
}

export function useTourContext() {
  const ctx = useContext(TourContext);
  if (!ctx) throw new Error("useTourContext must be used within TourContextProvider");
  return ctx;
}