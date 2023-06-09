let numAlumnos = prompt("Ingrese la cantidad de alumnos:");
let notasMatematicas = [];
let notasFisica = [];
let notasProgramacion = [];
let aprobadosMatematicas = 0;
let aprobadosFisica = 0;
let aprobadosProgramacion = 0;

for (let i = 0; i < numAlumnos; i++) {
  let cedula = prompt("Ingrese la cedula del alumno " + (i+1));
  let nombre = prompt("Ingrese el nombre del alumno " + (i+1));
  let notaMatematicas = parseFloat(prompt("Ingrese la nota de Matemáticas del alumno " + (i+1)));
  notasMatematicas.push(notaMatematicas);
  let notaFisica = parseFloat(prompt("Ingrese la nota de Física del alumno " + (i+1)));
  notasFisica.push(notaFisica);
  let notaProgramacion = parseFloat(prompt("Ingrese la nota de Programación del alumno " + (i+1)));
  notasProgramacion.push(notaProgramacion);

  if (notaMatematicas >= 60) {
    aprobadosMatematicas++;
  }
  if (notaFisica >= 60) {
    aprobadosFisica++;
  }
  if (notaProgramacion >= 60) {
    aprobadosProgramacion++;
  }
}

let promedioMatematicas = notasMatematicas.reduce((a, b) => a + b, 0) / numAlumnos;
let promedioFisica = notasFisica.reduce((a, b) => a + b, 0) / numAlumnos;
let promedioProgramacion = notasProgramacion.reduce((a, b) => a + b, 0) / numAlumnos;

console.log("La nota promedio de Matematicas es: " + promedioMatematicas);
console.log("La nota promedio de Fisica es: " + promedioFisica);
console.log("La nota promedio de Programacion es: " + promedioProgramacion);
console.log("El número de alumnos aprobados en Matematicas es: " + aprobadosMatematicas);
console.log("El número de alumnos aprobados en Fisica es: " + aprobadosFisica);
console.log("El número de alumnos aprobados en Programacion es: " + aprobadosProgramacion);