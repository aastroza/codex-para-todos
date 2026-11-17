# Codex para todos

Landing page de la comunidad **Codex para todos**, creada para compartir recursos, encuentros y formas simples de aprender a trabajar con Codex desde distintas disciplinas y niveles de experiencia.

## Desarrollo

```bash
npm install
npm run dev
```

El sitio queda disponible en `http://127.0.0.1:4321/`.

## Blog y boletín

Los posts viven en `src/content/blog/` como archivos Markdown. El sitio publica el listado en `/blog/`, cada post en `/blog/{slug}/` y el feed en `/rss.xml`.

El boletín usa Buttondown embebido en el sitio. El formulario en español etiqueta las suscripciones con `español`.

## Build y despliegue

```bash
npm run build
npm run deploy
```

El proyecto está construido con Astro y se despliega en Cloudflare Pages.

## Portal de la hackathon

La guía de participantes está en `src/pages/hackathon.astro`, con estilos propios
 en `src/styles/hackathon.css`. Los datos, criterios y requisitos editables viven
 en `src/data/hackathon.ts`; completar allí `submissionUrl` y
`submissionDeadline` cuando se confirmen.

`hackathon.codexparatodos.com` es un dominio del mismo proyecto de Cloudflare
Pages. `functions/_middleware.js` sirve `/hackathon/` en la raíz de ese
subdominio; el dominio principal conserva su portada. Se publica con el mismo
`npm run deploy`. Para revisión local, abrir `/hackathon/`.
