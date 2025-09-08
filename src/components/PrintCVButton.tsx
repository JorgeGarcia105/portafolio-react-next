"use client";
import React from "react";

export default function PrintCVButton({ className = "" }: { className?: string }) {
  return (
    <div className={`print-actions ${className}`}>
      <button
        type="button"
        onClick={() => window.print()}
        className="print-btn inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
        aria-label="Print or save CV as PDF"
      >
        Print / Save PDF
      </button>
    </div>
  );
}
