Documentación de mejoras de diseño (resumen)

Archivos modificados en esta sesión de actualización (prácticas 2027-1):

- `README.md` — Documentación principal actualizada con datos reales del autor, proyectos, certificaciones y objetivo profesional.
- `README2.md` — Resumen del portafolio con datos del autor y comandos útiles.
- `src/lib/content.ts` — Lista de 13 proyectos reales con URLs de GitHub, tech stacks y descripciones.
- `src/app/projects/page.tsx` — Proyectos reemplazados por datos reales de GitHub (eliminados placeholders de example.com).
- `src/app/cv/page.tsx` — CV actualizado: semestre 9°-10°, graduación 2027-2, teléfono, ciudad, experiencia, proyectos y educación reales. Eliminadas referencias ficticias.
- `src/app/about/page.tsx` — Texto sobre mí actualizado con semestre actual y skills.
- `public/docs/CV_Jorge_Garcia.pdf` — CV PDF actualizado (generado desde `Practicas/`).

Cómo probar localmente

1) Instalar dependencias:

```bash
npm install
```

2) Ejecutar servidor de desarrollo:

```bash
npm run dev
# abrir http://localhost:3000
```

3) Verificar tipos y build de producción:

```bash
npx tsc --noEmit
npm run build
```
