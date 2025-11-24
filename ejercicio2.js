// Ejercicioo 2

// Arreglo de frutas
let frutas = ["manzana", "pera", "uva"];

// Se agrega banano al inicio
frutas.unshift("banano");

// Se retira el ultimo elemento
frutas.pop();

// Se recorre con un bucle for..of
for (let fruta of frutas) {
    console.log(`Fruta: ${fruta}`);
}