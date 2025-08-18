"use client";
import TourWrapper from "./TourWrapper";
import Navigation from "./Navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <TourWrapper>
      <Navigation />
      {children}
    </TourWrapper>
  );
}