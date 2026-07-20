# Demo 3: herramienta de anotación con `/goal`

La demo comienza con investigación. No actives Goal mode hasta que Codex haya
inspeccionado el repositorio y redactado una definición verificable de
"terminado".

## Paso 1: investigar y formular el goal

```text
Lee PROBLEMA.md, AGENTS.md, los datos disponibles y cualquier artefacto del
baseline. Todavía no implementes y no inicies set_goal.

Queremos construir una herramienta local para que una persona revise los
tickets donde el clasificador no tiene suficiente confianza. Investiga el
repositorio y determina:

- qué formato tiene o debería tener la cola de revisión;
- qué campos necesita ver el anotador;
- qué acciones debe poder tomar;
- cómo conservar procedencia y trazabilidad;
- cómo persistir las anotaciones sin tocar los datos originales;
- qué stack existente permite implementar la interfaz con el menor costo;
- qué pruebas demostrarían que el flujo funciona.

Haz las preguntas necesarias antes de cerrar decisiones importantes. Luego
propón un texto de goal de menos de 4.000 caracteres que incluya resultado,
restricciones, entregables y criterios verificables de término.

El goal debe mantener el test oficial congelado y exigir, como mínimo:

- cargar una cola de tickets inciertos de ejemplo;
- mostrar texto, predicción, confianza y alternativas relevantes;
- aceptar, corregir o escalar cada caso;
- registrar la decisión, la etiqueta final, una marca de tiempo y una nota
  opcional;
- persistir las anotaciones en un archivo nuevo y trazable;
- ejecutar la aplicación con un solo comando documentado;
- incluir pruebas para validación de entradas y persistencia;
- dejar instrucciones de uso y limitaciones conocidas.

No escribas código. Termina mostrando únicamente: decisiones tomadas,
preguntas pendientes y el texto propuesto para /goal.
```

## Paso 2: iniciar Goal mode

Revisa con el grupo el goal propuesto por Codex. Ajusta lo que corresponda y
pégalo con este formato:

```text
/goal <texto refinado que propuso Codex>
```

El objetivo se convierte en el prompt inicial y en el criterio de término del
trabajo. Si el resultado sigue siendo ambiguo, vuelve al paso de investigación
o usa `/plan` antes de iniciar `/goal`.

