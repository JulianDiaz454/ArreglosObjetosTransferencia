// Ejercicio 3

// Variable para almacenar la suma de las notas
let suma = 0;

// Arreglo con 6 notas numericas
let notas = [4.5, 3.8, 4.2, 5.0, 2.9, 4.7];

// Se recorre el arreglo con un bucle for
for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
    console.log(`Nota ${i + 1}: ${notas[i]}`);
}

// Se calcula el promedio
let promedio = suma / notas.length;

// Se muestra el promedio en la consola
console.log(`Promedio de notas: ${promedio}`);