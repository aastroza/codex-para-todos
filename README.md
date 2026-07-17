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
