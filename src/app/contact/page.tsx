"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 lg:px-16 bg-zinc-50 dark:bg-zinc-900">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-6">
        Contact Me
      </h2>
      <div className="text-center">
        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
          I'm always open to new opportunities, collaborations, or discussions. Feel free to reach out!
        </p>
        <a
          href="mailto:jorgarciatorres@outlook.com"
          className="inline-block bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}
