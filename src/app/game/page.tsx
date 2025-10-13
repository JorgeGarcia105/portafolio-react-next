"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Game() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [heightVh, setHeightVh] = useState<number>(75);

  // Load saved height from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("gameHeightVh");
      if (saved) {
        const n = Number(saved);
        if (!Number.isNaN(n) && n >= 50 && n <= 100) setHeightVh(n);
      }
    } catch {}
  }, []);

  // Persist on change
  useEffect(() => {
    try {
      localStorage.setItem("gameHeightVh", String(heightVh));
    } catch {}
  }, [heightVh]);

  const goFull = () => {
    const el = iframeRef.current;
    if (!el) return;
    if (el.requestFullscreen) {
      el.requestFullscreen();
      return;
    }
    // Safari/WebKit prefix fallback on iframe
    if (
      'webkitRequestFullscreen' in el &&
      typeof (el as HTMLIFrameElement & { webkitRequestFullscreen?: () => void }).webkitRequestFullscreen === 'function'
    ) {
      (el as HTMLIFrameElement & { webkitRequestFullscreen?: () => void }).webkitRequestFullscreen!();
      return;
    }
    // Fallback: try fullscreen on wrapper container
    const wrap = wrapperRef.current;
    if (wrap) {
      if (wrap.requestFullscreen) {
        wrap.requestFullscreen();
      } else if (
        'webkitRequestFullscreen' in wrap &&
        typeof (wrap as HTMLDivElement & { webkitRequestFullscreen?: () => void }).webkitRequestFullscreen === 'function'
      ) {
        (wrap as HTMLDivElement & { webkitRequestFullscreen?: () => void }).webkitRequestFullscreen!();
      }
    }
  };

  return (
    <main className="min-h-[70vh] flex flex-col items-center p-6">
      <div className="w-full max-w-6xl strong-border rounded-xl overflow-hidden bg-white dark:bg-zinc-900 shadow">
        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
          <h1 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">Play My Game</h1>
          <div className="flex items-center gap-2 flex-wrap">
            {/* Height slider */}
            <label className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300" htmlFor="heightRange">
              Height
              <input
                id="heightRange"
                type="range"
                min={50}
                max={100}
                step={1}
                value={heightVh}
                onChange={(e) => setHeightVh(Number(e.target.value))}
                className="accent-blue-600 cursor-pointer"
                aria-label="Adjust game height"
              />
              <span className="tabular-nums w-10 text-right">{heightVh}vh</span>
            </label>
            <button
              onClick={goFull}
              className="px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
              aria-label="Enter fullscreen"
            >
              Fullscreen
            </button>
            <Link
              href="https://snake-app-ten.vercel.app/"
              target="_blank"
              className="px-3 py-1.5 rounded-md border border-zinc-300 dark:border-zinc-700 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
              aria-label="Open game in new tab"
            >
              Open in new tab
            </Link>
          </div>
        </div>

        {/* Game viewport */}
        <div
          ref={wrapperRef}
          className="w-full bg-zinc-100 dark:bg-zinc-900"
          style={{ height: `${heightVh}vh` }}
        >
          <iframe
            ref={iframeRef}
            src="https://snake-app-ten.vercel.app/"
            title="Game"
            className="w-full h-full block"
            allow="fullscreen; gamepad; xr-spatial-tracking; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      {/* Mobile tip */}
      <p className="mt-3 text-xs text-zinc-600 dark:text-zinc-400 sm:hidden">
        Tip: gira tu dispositivo para jugar en pantalla más amplia.
      </p>
    </main>
  );
}