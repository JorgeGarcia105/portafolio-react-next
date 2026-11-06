# Portafolio Profesional - Jorge Iván García Torres

Este documento resume el contenido y estructura del portafolio Next.js (`portafolio-react-next`).

## Resumen

Portafolio profesional desarrollado con Next.js 15, React, TypeScript y Tailwind CSS, desplegado en Vercel. Incluye secciones de perfil, proyectos, certificados, contacto y CV imprimible. Orientado a la búsqueda de práctica profesional para el periodo 2027-1.

## Secciones principales

- **Inicio (`/`)**: Presentación, descarga de CV y tarjeta interactiva de certificación Spring Boot.
- **Sobre mí (`/about`)**: Perfil profesional, experiencia y habilidades principales.
- **Proyectos (`/projects`)**: 13 proyectos con tarjetas, tecnologías y enlaces a GitHub.
- **Certificados (`/certificates`)**: Tarjetas tipo "flip" con cada certificado (Alura Latam, ONE).
- **Contacto (`/contact`)**: Formulario y redes sociales.
- **CV (`/cv`)**: Currículum vitae completo e imprimible.
- **Habilidades (`/skills`)**: Detalle del stack tecnológico.

## Datos del autor

- **Nombre:** Jorge Iván García Torres
- **Estudios:** Ingeniería de Sistemas y Computación — Universidad de Caldas (9°-10° semestre, faltan 5 materias, graduación esperada 2027-2)
- **Email:** garciatorresjorgeivan10@gmail.com
- **Teléfono:** +57 322 408 0309
- **Ciudad:** Manizales, Caldas, Colombia
- **GitHub:** https://github.com/JorgeGarcia105
- **LinkedIn:** https://linkedin.com/in/JorgeGarcia105
- **Portafolio (GitHub Pages):** https://jorgegarcia105.github.io/Portafolio/

## Comandos útiles

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Lint
npm run lint

# Verificar tipos
npx tsc --noEmit
```

## Archivos relevantes

- `src/app/page.tsx` — Página de inicio
- `src/app/about/page.tsx` — Sobre mí
- `src/app/projects/page.tsx` — Proyectos
- `src/app/certificates/page.tsx` — Certificados
- `src/app/contact/page.tsx` — Contacto
- `src/app/cv/page.tsx` — CV imprimible
- `src/app/skills/page.tsx` — Habilidades
- `src/lib/content.ts` — Datos de proyectos y posts
- `src/components/ProjectCard.tsx` — Tarjeta de proyecto
- `src/components/Hero.tsx` — Hero de inicio
- `public/docs/CV_Jorge_Garcia.pdf` — CV para descarga
