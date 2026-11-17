// Fuente: equipos-aceptados-hackathon.md, compartido por Alonso, 17/11/2026.
// https://drive.google.com/file/d/1nlY7axJJ2Rmbdc7eQGX6iyKOzPu1GfKu/view
// Alonso confirmó la fusión de Gatos Armados Espaciales y pidió mover los
// equipos de una persona a Busco equipo. Esto no modifica inscripciones en Luma.
export const teams = [
  { name: 'AFKs Games', members: ['Luis bobadilla', 'Juan Alejandro Seguel Donoso', 'Sofia Ignacia Cifuentes Tudela'] },
  { name: 'Arcares', members: ['Gabriel AREVALO', 'Bastian Esteban Carter San Martín', 'Juan Peña', 'Carlos Enrique Espinoza Silva'] },
  { name: 'Atrezatura', members: ['Rocío Toledo', 'Ciro', 'Benjamín Witting'] },
  { name: 'Cavarean', members: ['Valentin', 'Renato Lenis', 'Andy', 'Camilo Bufadel Faúndez'] },
  { name: 'Cloudtale', members: ['jennifer albornoz', 'Pedro Hernandez'] },
  { name: 'Collide', members: ['Dacier Tapia Donoso', 'Isidora Vargas', 'Anais Isidora Tapia Dononoso'] },
  { name: 'Fourlokos', members: ['Benjamin Herrera', 'Matias Mouat', 'María José López', 'Pablo Núñez Candia'] },
  { name: 'GameMiners', members: ['Camila Chávez', 'Matias Vera', 'Ignacio Aravena'] },
  { name: 'Gatos Armados Espaciales', members: ['Geraldinne', 'Cristian Astorga', 'Anahi Gonzalez'] },
  { name: 'Geek Labs', members: ['Diego Caballero', 'Daniel Hermosilla', 'Ignacio Rumie'] },
  { name: 'L4TA', members: ['Nicolás ortega', 'Gabriel Parrales Carcelen', 'Isidora Díaz'] },
  { name: 'Los 1200LP', members: ['Leon Verdejo', 'Cristobal Romero', 'Matias villegas', 'Ignacio Liberón'] },
  { name: 'MafiaDev', members: ['Sebastián', 'Vicente Ignacio Ramirez Almonacid', 'Alejandro Ithal', 'Bastian'] },
  { name: 'PuduFactory', members: ['Max Rojas', 'Diego Rubilar'] },
  { name: 'Spicy', members: ['Martin Goldberg', 'diego flores'] },
  { name: 'The Miners', members: ['brayan andres aimene alamos', 'Yeremi Matias Vasquez Gonzalez', 'Jose', 'Mauricio Alejandro Riquelme Carrasco'] },
  { name: 'Utemsitos', members: ['Martin Segura', 'Roque Cea', 'javiera Gaete', 'Cristopher Gomez'] },
  { name: 'Vlitz', members: ['Maximiliano Moreno', 'Benjamín Lundstedt Mella', 'Daniel Aboitiz'] },
  { name: 'VoidCode', members: ['David Alfonso Sanchez Ramirez', 'Emilio Castelblanco', 'Lucas Kluck Middleton', 'Sofia Teppa'] },
  { name: 'WorksOnMyMachine', members: ['Simón Muñoz Saavedra', 'Sebastian Beltran', 'Fernanda Sanchirico', 'Fabián Castillo'] },
];
export const lookingForTeam = ['Abigail Bohorquez', 'Catalina Peñaloza', 'Constanza Belén Neira Urrutia', 'Constanza Villanueva', 'Francisco Battiston', 'Jorge Layseca Burdiles', 'Laura Valentina Rodriguez Ore', 'Matías Chicao', 'Nicolas Inostrosa', 'sofía', 'Tania Vilches', 'tomas'];
export const participantCount = teams.reduce((total, team) => total + team.members.length, 0) + lookingForTeam.length;
