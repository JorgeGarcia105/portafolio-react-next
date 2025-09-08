"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export default function SiteThemeProvider({ children }: { children: ReactNode }) {
  // Use a deterministic server default to avoid hydration mismatches.
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}