---
title: "Qué pasa cuando estudiantes de 14 carreras de pregrado construyen software con Codex"
description: "Una reflexión sobre un curso donde estudiantes de distintas carreras usaron Codex para convertir problemas cotidianos en prototipos funcionales."
pubDate: 2026-07-01T12:00:00-04:00
featured: false
---

Este semestre dicté XTECC21: "Crea tu propio agente: automatiza tu día a día". Es un curso del programa [ExploraTech](https://exploratec.udd.cl/), de la Facultad de Ingeniería de la Universidad del Desarrollo, pero está abierto a estudiantes de todas las carreras del campus. Por eso en la sala había estudiantes de ingeniería, diseño, odontología, psicología, arquitectura, derecho, tecnología médica y otras áreas.

El curso partió con una introducción a la inteligencia artificial generativa y al uso de [ChatGPT](https://chatgpt.com/). Después pasamos a [Codex](https://openai.com/codex/). La pregunta era por qué necesitábamos una herramienta como esa si ya teníamos chatbots capaces de escribir, resumir y responder preguntas.

La respuesta tiene que ver con una habilidad que hemos desarrollado durante décadas: operar dispositivos computacionales. Abrimos programas, copiamos datos, llenamos formularios, renombramos archivos, revisamos planillas, subimos documentos, hacemos clic en menús y repetimos secuencias enteras de trabajo.

Automatizar esas operaciones siempre fue posible. El problema era el costo. Había que saber programar, entender el sistema, escribir scripts, probarlos y mantenerlos. Con herramientas agénticas como Codex, esa frontera se mueve. El estudiante puede describir lo que quiere lograr y el agente programa lo necesario para acercarse a ese resultado.

La mayoría de los estudiantes no tenía experiencia previa programando. Por eso el curso tenía que partir desde otro lugar. Antes de mirar archivos o decisiones técnicas, necesitaban aprender a formular, acotar, probar lo que Codex devolvía y decidir cuándo el resultado servía.

## Tres semanas para convertir una idea en software

El curso duró tres meses, con dos sesiones semanales. Hubo certámenes escritos para evaluar conceptos, pero el tramo final fue práctico.

En las últimas tres semanas les pedí que encontraran un problema que pudiera resolverse con una aplicación, un software o un agente. La consigna era amplia a propósito. Quería ver qué problemas aparecían cuando el punto de partida era la rutina de los propios estudiantes, no un enunciado diseñado por el profesor.

Las clases de esas semanas fueron más cortas. Yo introducía una pieza técnica y después trabajábamos en los proyectos. Vimos lo básico de [vibe coding](https://en.wikipedia.org/wiki/Vibe_coding), publicación con [Vercel](https://vercel.com/) y login con [Firebase](https://firebase.google.com/), junto con otras piezas necesarias para que las demos llegaran a buen puerto.

Lo más importante ocurrió en el acompañamiento. Cada estudiante tenía una necesidad distinta. Algunos necesitaban bajar una idea demasiado grande a una primera versión. Otros necesitaban entender por qué su app no guardaba datos. Otros querían conectar APIs, limpiar una interfaz, agregar autenticación o preparar una demo que no se cayera al presentarla.

Ese trabajo caso a caso fue exigente, pero también fue donde el curso empezó a mostrar su valor. Los estudiantes trabajaban con una herramienta nueva, sus propias expectativas y los límites del tiempo.

<figure>
  <img src="/images/demo-screenshots/calendaris-01-portada.png" alt="Portada de Calendaris con calendario académico y panel de acceso" />
  <figcaption>Calendaris parte desde una necesidad muy local: un calendario que entienda cómo se organiza la vida académica en la universidad.</figcaption>
</figure>

## Problemas pequeños, software específico

Uno de los proyectos del showcase es [Calendaris](https://calendaris-inky.vercel.app/), de Nicolás Soto. La idea parece simple: un calendario universitario. Pero esa simpleza es engañosa.

Existen muchas aplicaciones de calendario. Ninguna habla exactamente el lenguaje de estos estudiantes. En la universidad conviven semestres, bimestres, trimestres, combinaciones por carrera y formas distintas de organizar evaluaciones. Calendaris toma esa necesidad específica y la convierte en una herramienta diseñada para ese contexto.

Ese tipo de problema me interesa mucho. No siempre hace falta una idea universal. A veces una buena aplicación nace porque alguien entiende una rutina mejor que cualquier software genérico.

[StudyBrain](https://study-brain-cniico.vercel.app), de Nicolás Campos, va por otro camino. Yo lo describo como un CRM para estudiantes. Centraliza notas, temarios, evaluaciones y planes semanales. Lo notable es que Nicolás es estudiante de primer año de informática y ya tiene usuarios usando el sistema.

También hay una segunda capa: StudyBrain está pensado para humanos y agentes. Nicolás tiene un plugin para Codex y Claude Code que permite gestionar necesidades estudiantiles desde esas herramientas. Ese detalle muestra hacia dónde puede ir este tipo de software. Una aplicación puede quedar preparada para personas haciendo clic y para agentes operando sobre ella.

<figure>
  <img src="/images/demo-screenshots/studybrain-01-portada.png" alt="Vista de agentes de StudyBrain" />
  <figcaption>StudyBrain funciona como un sistema de gestión académica personal y además deja espacio para agentes conectados al flujo académico.</figcaption>
</figure>

[BriefLab](https://brief-lab.vercel.app), de Amelia Troncoso, es otro caso que me gusta mucho. Amelia viene de diseño, no de programación. Eso se nota para bien. La aplicación tiene gusto visual, cuidado y una idea clara: generar briefs ficticios para practicar diseño y construir portafolio sin depender de clientes reales.

Codex aporta parte de la ejecución técnica. Amelia aporta el criterio de diseño. Esa combinación es una de las mejores señales del curso. Cuando una herramienta agéntica baja el costo de construir, el gusto y el conocimiento de dominio pesan más.

<figure>
  <img src="/images/demo-screenshots/brieflab-02-flujo.png" alt="Flujo de selección de área en BriefLab" />
  <figcaption>BriefLab muestra algo que me interesa especialmente: una estudiante sin foco en programación usando Codex para materializar criterio de diseño.</figcaption>
</figure>

[FinEx](https://finex-public-frontend.vercel.app), de Sebastián Ramírez, aborda finanzas personales. Es un terreno donde ya existen muchas aplicaciones, pero el proyecto tiene una fuerza distinta porque nace de una práctica real. Sebastián venía ordenando finanzas en Excel y llevó esa lógica a una app con importación desde Gmail, clasificación de gastos y visualización de presupuesto.

También tiene usuarios. Él mismo la usa. Otras personas pueden probarla. La gracia está en convertir un flujo propio de finanzas personales en un producto más claro, compartible y bien terminado.

<figure>
  <img src="/images/demo-screenshots/finex-02-demo-dashboard.png" alt="Dashboard de FinEx con resumen financiero" />
  <figcaption>FinEx transforma una forma personal de ordenar gastos en una aplicación que otros pueden usar.</figcaption>
</figure>

Fit Me, de Diego Rivera y Valentina Castillo, es quizá el proyecto más conceptual de todos. En vez de una aplicación web pública, es una automatización que corre los domingos en el computador de sus creadores y prepara siete outfits semanales con ropa real, referencias de estilo y clima.

Me parece brutal por una razón: muestra que el software también puede ser privado, específico y pequeño. Nadie habría financiado una gran plataforma para resolver exactamente esa necesidad. Antes habría sido demasiado caro construir algo así para una sola persona. Con agentes, ese costo baja lo suficiente como para que valga la pena.

Y está bien que sea privado. La ropa, el clima, la agenda y las preferencias personales no tienen por qué convertirse en una startup. Pueden convertirse en una automatización que le haga un poquito más feliz el día a alguien.

<figure>
  <img src="/images/demo-screenshots/fit-me-02-propuesta-final.jpg" alt="Resultado visual de outfits semanales generados por Fit Me" />
  <figcaption>Fit Me lleva la idea de software personal a un extremo muy claro: una automatización privada para decidir qué vestir durante la semana.</figcaption>
</figure>

[RubricaCheck](https://rubricacheck-mvp.vercel.app), de José Tomás Cifuentes, cierra muy bien la selección. José Tomás estudia Ingeniería Civil Obras Civiles. Su problema es concreto: los profesores entregan rúbricas e instrucciones, y muchas veces el estudiante necesita traducir ese material en criterios claros para preparar una entrega.

RubricaCheck convierte rúbricas e instrucciones en una estructura más manejable. Usa la API de Gemini y tiene un flujo completo. Me gusta porque no intenta hacer de todo. Toma una fricción académica común y la vuelve operable.

<figure>
  <img src="/images/demo-screenshots/rubricacheck-02-ejemplo-o-formulario.png" alt="Ejemplo cargado en RubricaCheck" />
  <figcaption>RubricaCheck convierte una rúbrica en un flujo de trabajo más claro para preparar una entrega.</figcaption>
</figure>

## Enseñar mientras la herramienta cambia

El mayor desafío del curso fue enseñar algo que se movía mucho mientras lo enseñábamos.

La [app de Codex](https://openai.com/index/introducing-the-codex-app/) era muy reciente. Vivimos múltiples cambios de modelo y varias funcionalidades se transformaron radicalmente en el camino.

Eso hizo el curso más difícil y más entretenido. Había que ajustar ejemplos, expectativas y formas de trabajo sobre la marcha. A veces una instrucción que antes requería varios pasos empezaba a resolverse de manera más directa. Otras veces aparecían errores nuevos. Los estudiantes tuvieron que aprender en un ambiente inestable, parecido al ambiente laboral que van a encontrar.

Esa fue otra idea que quise transmitirles. Independiente de si su carrera incluye programar o no, necesitan acostumbrarse a desenvolverse en este nuevo entorno profesional. Un entorno donde parte del trabajo se delega a sistemas que leen, escriben, programan, prueban y operan. La ventaja no queda en saber apretar más botones. Queda en entender qué pedir, cómo evaluar lo que vuelve y cuándo intervenir.

## La exposición de los proyectos a la comunidad

Después del examen final, invitamos a seis proyectos a exponerse ante la comunidad en el [Showcase ExploraTech](/showcase/). En esa página dejamos una galería con capturas, enlaces y una descripción breve de cada demo.

Vistos juntos, esos proyectos cuentan algo sobre el momento en que estamos. Un estudiante puede acercarse mucho más rápido a una primera versión funcional, pero el trabajo no desaparece. Hay que elegir mejores problemas, formular mejor, probar más y tener criterio para no aceptar cualquier salida del agente. Por eso la frase que más repetí durante el curso me sigue pareciendo útil: moverse a velocidad máquina, pero con criterio humano.
