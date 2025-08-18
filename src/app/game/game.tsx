"use client";

export default function GamePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-zinc-900 py-8 px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Play My Game</h1>
      <div className="w-full max-w-2xl aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden mb-6">
        <iframe
          src="https://your-game-link.com" // Cambia esto por el enlace de tu juego
          title="Embedded Game"
          className="w-full h-full"
          allowFullScreen
        />
      </div>
      <p className="text-zinc-600 dark:text-zinc-300">
        Enjoy the game! If it doesn't load, <a href="https://your-game-link.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">click here</a>.
      </p>
    </main>
  );
}