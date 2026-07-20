# Demo 2: un agente construye y otro critica

Esta demo usa dos chats. El segundo debe partir con contexto independiente y
recibir el cambio terminado, no la conversación del constructor.

## Chat A: agente constructor

```text
Lee PROBLEMA.md, AGENTS.md y el estado actual del repositorio.

Implementa un baseline reproducible para el clasificador de tickets en
español. Antes de escribir código, explica qué split usarás, qué métrica será
principal y qué decisiones quedan abiertas. Mantén el test oficial congelado.

El baseline debe:

- ejecutarse localmente en CPU;
- fijar seeds y registrar configuración;
- conservar la procedencia de los datos;
- reportar macro-F1 y métricas por clase;
- producir probabilidades o scores comparables;
- proponer una regla inicial de abstención para enviar casos inciertos a
  revisión humana;
- guardar resultados y el comando exacto de reproducción.

Agrega pruebas proporcionales al cambio. No optimices contra el test, no uses
datos sintéticos o traducidos en el test y no ocultes clases con mal desempeño.

Al terminar, deja un resumen para otro agente con:

1. archivos modificados;
2. supuestos adoptados;
3. comandos ejecutados y sus resultados;
4. riesgos conocidos;
5. afirmaciones que el revisor debería intentar refutar.
```

## Chat B: agente revisor independiente

```text
Actúa como revisor independiente. Lee PROBLEMA.md, AGENTS.md y el cambio del
baseline que dejó otro agente. No asumas que su resumen es correcto y no edites
archivos todavía.

Tu trabajo es intentar refutar que el resultado sea científicamente defendible
y reproducible. Revisa como mínimo:

- leakage entre splits y uso indebido del test;
- procedencia, traducciones y transformaciones de los datos;
- seeds, configuración y comandos de reproducción;
- elección de macro-F1 y métricas por clase;
- cálculo e interpretación de confianza;
- cobertura, errores y sesgos de la política de abstención;
- pruebas ausentes, resultados no respaldados y supuestos silenciosos.

Ejecuta las verificaciones que sean seguras y pertinentes. Entrega un informe
ordenado por severidad. Para cada hallazgo incluye evidencia concreta, impacto
y corrección propuesta. Separa errores confirmados de preguntas o riesgos.

Cierra con un veredicto: aprobado, aprobado con cambios o no aprobado. Indica
qué evidencia mínima cambiaría tu veredicto.
```

