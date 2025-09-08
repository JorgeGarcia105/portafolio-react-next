"use client";

import { useRef } from "react";
import Link from "next/link";

export default function Game() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const goFull = () => {
    const el = iframeRef.current;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
    else if ('webkitRequestFullscreen' in el && typeof (el as HTMLIFrameElement & { webkitRequestFullscreen?: () => void }).webkitRequestFullscreen === 'function') {
      (el as HTMLIFrameElement & { webkitRequestFullscreen?: () => void }).webkitRequestFullscreen!();
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">Play My Game</h1>
      <div className="w-full max-w-4xl aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-lg overflow-hidden shadow">
        <iframe
          ref={iframeRef}
          src="https://your-game-link.com"
          title="Game"
          className="w-full h-full"
          allowFullScreen
        />
      </div>
      <div className="mt-4 flex gap-3">
        <button onClick={goFull} className="px-4 py-2 bg-blue-700 text-white rounded">Enter Fullscreen</button>
        <Link href="https://your-game-link.com" target="_blank" className="px-4 py-2 border rounded">Open in new tab</Link>
      </div>
    </main>
  );
}