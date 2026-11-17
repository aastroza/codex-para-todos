// Fuentes: Luma https://luma.com/zv06n9np y la invitación a mentores
// https://docs.google.com/document/d/1i7mi18QqLJVj_1tfKe2wZrIm3Cx-7AAh1N7Gggx2EXg
// Mejoras y lista de equipos facilitadas por Alonso el 17 de noviembre de 2026.
// Gatos Armados Espaciales unificado; equipos de una persona pasan a Busco equipo.
export const hackathon = {
  name: 'Build Games with Codex',
  date: 'Lunes 23 de noviembre de 2026',
  hours: '09:00 a 19:00',
  venue: 'Aula Magna UDD',
  campus: 'Campus Rector Ernesto Silva Bafalluy',
  address: 'Av. Plaza 680, Las Condes, Santiago',
  eventUrl: 'https://luma.com/zv06n9np',
  cover: 'https://images.lumacdn.com/uploads/1l/4e0ac340-088d-48d2-a906-1459203c29ff.png',
  // Completar cuando la organización confirme los detalles.
  submissionUrl: null as string | null,
  submissionDeadline: null as string | null,
  schedule: [
    { time: '09:00', title: 'Acreditación', detail: 'Llega puntual al Aula Magna UDD para acreditarte y preparar tu equipo.' },
    { time: '11:00–16:00', title: 'Franja prevista de mentorías', detail: 'Acompañamiento para probar avances, ajustar el alcance y mejorar la jugabilidad, el arte y la implementación. Horarios de cada mentor por confirmar.' },
    { time: '19:00', title: 'Fin de la jornada', detail: 'El horario de evaluación y premiación se confirmará por separado.' },
  ],
  criteria: [
    { title: 'Jugabilidad', detail: 'Claridad, entretención y coherencia de la experiencia de juego.' },
    { title: 'Arte', detail: 'Intención, coherencia y cuidado de la propuesta visual y sonora, y su aporte al juego.' },
    { title: 'Ejecución y pulido', detail: 'Funcionamiento, calidad de implementación y mejoras realizadas a partir de pruebas.' },
    { title: 'Originalidad', detail: 'La propuesta del juego y cómo desarrolla sus ideas.' },
    { title: 'Trabajo e iteración con Codex', detail: 'Cómo usaron Codex para construir, probar y mejorar el prototipo, y qué decisiones tomaron para desarrollar los resultados generados.' },
  ],
  preparation: [
    'Revisa que tu inscripción en Luma esté aprobada.',
    'Trae tu computador con batería cargada y su cargador. Habrá enchufes.',
    'Trae un adaptador Ethernet si tu computador lo necesita: habrá puntos de red.',
    'Trae audífonos con cancelación de ruido, protectores auditivos o lo que uses para concentrarte.',
    'Coordina con tu equipo: pueden ser hasta cuatro integrantes.',
  ],
  delivery: [
    'Un prototipo funcional y jugable.',
    'Código publicado en un repositorio público.',
    'Una licencia open source para el proyecto.',
    'Instrucciones claras para ejecutar el juego.',
    'Identificación de los recursos de terceros y sus licencias.',
  ],
};
