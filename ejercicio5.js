// Ejercicio 5

// Arreglo vacio
let tareas = [];

// Se agregan 3 tareas
for (let i = 1; i <= 3; i++) {
    let tarea = prompt(`Ingrese la tarea ${i}:`);
    tareas.push(tarea);
}

// Se elimina la ultima tarea
tareas.pop();

// Se muestra la lista de tareas restantes
console.log("Lista de tareas:");
for (let i = 0; i < tareas.length; i++) {
    console.log(`- ${tareas[i]}`);
}