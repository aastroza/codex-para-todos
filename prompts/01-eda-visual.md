# Demo 1: EDA visual como micrositio

Pega este prompt en un chat nuevo de Codex abierto sobre el repositorio del
taller.

```text
Lee PROBLEMA.md, AGENTS.md y la estructura completa del repositorio antes de
modificar archivos.

Quiero transformar el análisis exploratorio del desafío en un micrositio
visual, no en una colección de gráficos sueltos. El sitio debe ayudar a tomar
decisiones sobre el clasificador de tickets y debe poder regenerarse desde el
repositorio.

Primero inspecciona los datos y responde con:

1. qué archivos y splits encontraste;
2. cinco preguntas de EDA que afecten decisiones reales del modelo;
3. los riesgos de leakage o contaminación que debemos evitar;
4. un plan breve de implementación y los artefactos que crearás.

Después del plan, construye una página HTML navegable que incluya, cuando los
datos lo permitan:

- distribución de ejemplos por intención;
- longitud y características básicas del texto;
- duplicados, nulos y problemas de calidad;
- clases potencialmente difíciles de distinguir;
- ejemplos representativos y filtros útiles;
- procedencia, split, fecha de corte y limitaciones del análisis.

Usa train y, si existe, validación para decidir qué mostrar. Mantén el test
oficial congelado: no muestres ejemplos, etiquetas ni análisis exploratorio del
test. Puedes comprobar únicamente su existencia, esquema y cantidad de filas.

Requisitos de entrega:

- un micrositio autocontenido en artifacts/eda/index.html;
- un script o notebook que lo regenere;
- un README corto con el comando exacto de reproducción;
- verificaciones de que el HTML abre sin recursos rotos;
- una nota explícita con hallazgos, supuestos y preguntas abiertas.

Trabaja con los datos y herramientas ya disponibles en el repositorio. No
agregues datos externos, no sobrescribas datos originales y no entrenes todavía
el modelo final.
```

