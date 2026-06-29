---
title: "Qué pasa cuando estudiantes de 14 carreras construyen software con Codex"
description: "Una reflexión sobre X-Tech 21, el curso de ExploraTech UDD donde estudiantes de distintas carreras usaron Codex para convertir problemas cotidianos en prototipos funcionales."
pubDate: 2026-06-29T12:00:00-04:00
featured: false
---

En el examen final de X-Tech 21, la definición de agente de IA importaba menos que la demo. Cada estudiante tenía que mostrar algo funcionando.

Tenían que explicar un problema real, contar cómo lo habían abordado y hacer una demo en vivo frente a sus compañeros. Algunos habían construido aplicaciones web. Otros, automatizaciones personales. Otros, herramientas que se parecían a productos pequeños, pero que partían de una necesidad muy concreta de su vida universitaria.

Ese fue el cierre formal del curso. El [Showcase ExploraTech](/showcase/) vino después. Seleccioné seis proyectos que me parecían buenos ejemplos del espíritu del curso. No armé un ranking. Hubo proyectos muy potentes que incluso conectaban con emprendimientos previos, como una empresa para vender verduras con conexión a proveedores. Preferí elegir proyectos que hubieran nacido completamente dentro de estas tres semanas finales.

Me interesaba mostrar otra cosa: qué pasa cuando estudiantes de muchas carreras reciben una herramienta agéntica, poco tiempo y una pregunta abierta sobre su propio día a día.

## Un curso sobre agentes

X-Tech 21 se llama "Crea tu propio agente: automatiza tu día a día". Es un curso del programa ExploraTech, de la Facultad de Ingeniería de la Universidad del Desarrollo, pero está abierto a estudiantes de todas las carreras del campus. Por eso en la sala había estudiantes de ingeniería, diseño, odontología, psicología, arquitectura, derecho, tecnología médica y otras áreas.

Hace dos o tres años que venimos haciendo cursos de inteligencia artificial generativa dentro de este programa. Esta versión fue distinta porque el foco estuvo en agentes.

El curso partió con una introducción a la inteligencia artificial generativa y al uso de ChatGPT. Después pasamos a Codex. La pregunta era por qué necesitábamos una herramienta como esa si ya teníamos chatbots capaces de escribir, resumir y responder preguntas.

La respuesta tiene que ver con una habilidad que hemos desarrollado durante décadas: operar dispositivos computacionales. Abrimos programas, copiamos datos, llenamos formularios, renombramos archivos, revisamos planillas, subimos documentos, hacemos clic en menús y repetimos secuencias enteras de trabajo.

Automatizar esas operaciones siempre fue posible. El problema era el costo. Había que saber programar, entender el sistema, escribir scripts, probarlos y mantenerlos. Con herramientas agénticas como Codex, esa frontera se mueve. El estudiante puede describir lo que quiere lograr y el agente programa lo necesario para acercarse a ese resultado.

Durante el curso repetí una idea varias veces: nos movíamos a velocidad máquina, pero con criterio humano.

Ese criterio era lo importante. Codex podía escribir código, crear interfaces, proponer estructuras de datos o ayudar a publicar una aplicación. El estudiante tenía que elegir el problema, acotar el alcance, probar el resultado y decidir si la solución tenía sentido.

## Tres semanas para convertir una idea en software

El curso duró tres meses, con dos sesiones semanales. Hubo certámenes escritos para evaluar conceptos, pero el tramo final fue práctico.

En las últimas tres semanas les pedí que encontraran un problema que pudiera resolverse con una aplicación, un software o un agente. La consigna era amplia a propósito. Quería ver qué problemas aparecían cuando el punto de partida era la rutina de los propios estudiantes, no un enunciado diseñado por el profesor.

Las clases de esas semanas fueron más cortas. Yo introducía una pieza técnica y después trabajábamos en los proyectos. Vimos lo básico de vibe coding, publicación con Vercel, login con Firebase y otras piezas necesarias para que las demos llegaran a buen puerto.

Lo más importante ocurrió en el acompañamiento. Cada estudiante tenía una necesidad distinta. Algunos necesitaban bajar una idea demasiado grande a una primera versión. Otros necesitaban entender por qué su app no guardaba datos. Otros querían conectar APIs, limpiar una interfaz, agregar autenticación o preparar una demo que no se cayera al presentarla.

Ese trabajo caso a caso fue exigente, pero también fue donde el curso empezó a mostrar su valor. Los estudiantes trabajaban con una herramienta nueva, sus propias expectativas y los límites del tiempo.

<figure>
  <img src="/images/demo-screenshots/calendaris-01-portada.png" alt="Portada de Calendaris con calendario académico y panel de acceso" />
  <figcaption>Calendaris partió desde una necesidad muy local: un calendario que entendiera cómo se organiza la vida académica en la universidad.</figcaption>
</figure>

## Problemas pequeños, software específico

Uno de los proyectos que elegí para el showcase fue Calendaris, de Nicolás Soto. La idea parece simple: un calendario universitario. Pero esa simpleza es engañosa.

Existen muchas aplicaciones de calendario. Ninguna habla exactamente el lenguaje de estos estudiantes. En la universidad conviven semestres, bimestres, trimestres, combinaciones por carrera y formas distintas de organizar evaluaciones. Calendaris toma esa necesidad específica y la convierte en una herramienta diseñada para ese contexto.

Ese tipo de problema me interesa mucho. No siempre hace falta una idea universal. A veces una buena aplicación nace porque alguien entiende una rutina mejor que cualquier software genérico.

StudyBrain, de Nicolás Campos, iba por otro camino. Yo lo describo como un CRM para estudiantes. Centraliza notas, temarios, evaluaciones y planes semanales. Lo notable es que Nicolás es estudiante de primer año de informática y ya tenía usuarios usando el sistema.

También había una segunda capa: StudyBrain estaba pensado para humanos y agentes. Nicolás creó un plugin para Codex y Claude Code para gestionar necesidades estudiantiles desde esas herramientas. Ese detalle muestra hacia dónde puede ir este tipo de software. Una aplicación puede quedar preparada para personas haciendo clic y para agentes operando sobre ella.

<figure>
  <img src="/images/demo-screenshots/studybrain-01-portada.png" alt="Pantalla principal de StudyBrain" />
  <figcaption>StudyBrain funcionaba como un sistema de gestión académica personal y ya tenía usuarios al cierre del curso.</figcaption>
</figure>

BriefLab, de Amelia Troncoso, fue otro caso que me gustó mucho. Amelia viene de diseño, no de programación. Eso se nota para bien. La aplicación tiene gusto visual, cuidado y una idea clara: generar briefs ficticios para practicar diseño y construir portafolio sin depender de clientes reales.

Codex puso parte de la ejecución técnica. Amelia puso el criterio de diseño. Esa combinación fue una de las mejores señales del curso. Cuando una herramienta agéntica baja el costo de construir, el gusto y el conocimiento de dominio pesan más.

<figure>
  <img src="/images/demo-screenshots/brieflab-02-flujo.png" alt="Flujo de selección de área en BriefLab" />
  <figcaption>BriefLab muestra algo que me interesa especialmente: una estudiante sin foco en programación usando Codex para materializar criterio de diseño.</figcaption>
</figure>

FinEx, de Sebastián Ramírez, abordó finanzas personales. Es un terreno donde ya existen muchas aplicaciones, pero el proyecto tenía una fuerza distinta porque nacía de una práctica real. Sebastián venía ordenando finanzas en Excel y llevó esa lógica a una app con importación desde Gmail, clasificación de gastos y visualización de presupuesto.

También tenía usuarios. Él mismo la usaba. Otras personas podían probarla. La gracia estaba en convertir un flujo propio de finanzas personales en un producto más claro, compartible y bien terminado.

<figure>
  <img src="/images/demo-screenshots/finex-02-demo-dashboard.png" alt="Dashboard de FinEx con resumen financiero" />
  <figcaption>FinEx transformó una forma personal de ordenar gastos en una aplicación que otros podían usar.</figcaption>
</figure>

Fit Me, de Diego Rivera y Valentina Castillo, fue quizá el proyecto más conceptual de todos. En vez de una aplicación web pública, construyeron una automatización que corría los domingos en el computador de sus creadores y preparaba siete outfits semanales con ropa real, referencias de estilo y clima.

Me pareció brutal por una razón: mostraba que el software también puede ser privado, específico y pequeño. Nadie habría financiado una gran plataforma para resolver exactamente esa necesidad. Antes habría sido demasiado caro construir algo así para una sola persona. Con agentes, ese costo baja lo suficiente como para que valga la pena.

Y está bien que sea privado. La ropa, el clima, la agenda y las preferencias personales no tienen por qué convertirse en una startup. Pueden convertirse en una automatización útil para alguien.

<figure>
  <img src="/images/demo-screenshots/fit-me-02-propuesta-final.jpg" alt="Resultado visual de outfits semanales generados por Fit Me" />
  <figcaption>Fit Me llevó la idea de software personal a un extremo muy claro: una automatización privada para decidir qué vestir durante la semana.</figcaption>
</figure>

RubricaCheck, de José Tomás Cifuentes, cerraba muy bien la selección. José Tomás estudia Ingeniería Civil Obras Civiles. Su problema era concreto: los profesores entregan rúbricas e instrucciones, y muchas veces el estudiante necesita traducir ese material en criterios claros para preparar una entrega.

RubricaCheck convierte rúbricas e instrucciones en una estructura más manejable. Usa la API de Gemini y tiene un flujo completo. Me gustó porque no intentaba hacer de todo. Tomaba una fricción académica común y la volvía operable.

<figure>
  <img src="/images/demo-screenshots/rubricacheck-02-ejemplo-o-formulario.png" alt="Ejemplo cargado en RubricaCheck" />
  <figcaption>RubricaCheck convierte una rúbrica en un flujo de trabajo más claro para preparar una entrega.</figcaption>
</figure>

## Enseñar mientras la herramienta cambia

El mayor desafío del curso fue enseñar algo que se movía mientras lo enseñábamos.

Codex en Windows era muy reciente. Durante el curso cambió bastante. También vivimos un salto importante de modelo. Podría decirlo de forma general, pero el guiño importa: GPT-5.5 cambió radicalmente la manera en que trabajamos.

Eso hizo el curso más difícil y más entretenido. Había que ajustar ejemplos, expectativas y formas de trabajo sobre la marcha. A veces una instrucción que antes requería varios pasos empezaba a resolverse de manera más directa. Otras veces aparecían errores nuevos. Los estudiantes tuvieron que aprender en un ambiente inestable, parecido al ambiente laboral que van a encontrar.

Esa fue otra idea que quise transmitirles. Independiente de si su carrera incluye programar o no, necesitan acostumbrarse a desenvolverse en este nuevo entorno profesional. Un entorno donde parte del trabajo se delega a sistemas que leen, escriben, programan, prueban y operan. La ventaja no queda en saber apretar más botones. Queda en entender qué pedir, cómo evaluar lo que vuelve y cuándo intervenir.

## Lo que me dejó el showcase

El [Showcase ExploraTech](/showcase/) fue posterior al examen final. Para mí funcionó como una segunda lectura del curso.

En el examen vimos demos, avances y problemas resueltos bajo presión. En el showcase pude mirar con más calma qué representaba cada proyecto. Calendaris hablaba de software situado en una institución. StudyBrain mostraba una app preparada para humanos y agentes. BriefLab mostraba gusto disciplinar. FinEx mostraba el paso de Excel a producto. Fit Me mostraba software íntimo y personal. RubricaCheck mostraba cómo una necesidad académica podía convertirse en flujo.

Vistos juntos, los seis proyectos cuentan algo sobre el momento en que estamos. Durante mucho tiempo, construir software exigía pasar primero por la programación. Ese filtro sigue siendo importante para muchas cosas, pero ya no ordena todo el mapa. Ahora un estudiante puede acercarse mucho más rápido a una primera versión funcional.

El trabajo cambia.

Hay que elegir mejores problemas. Hay que formular mejor. Hay que probar más. Hay que tener criterio para no aceptar cualquier salida del agente. Hay que entender cuándo una demo está lista para mostrarse y cuándo solo parece lista.

Por eso la frase que más repetí durante el curso me sigue pareciendo útil: moverse a velocidad máquina, pero con criterio humano.

Eso es lo que espero que los estudiantes se lleven: una forma de trabajar que les va a importar en su desarrollo profesional, programen o no programen. El nuevo ambiente laboral no va a esperar a que todos se conviertan en ingenieros de software. Va a pedir que más personas sepan convertir problemas, contexto y juicio en sistemas que funcionen.

Puedes revisar los seis proyectos seleccionados en el [Showcase ExploraTech](/showcase/).
