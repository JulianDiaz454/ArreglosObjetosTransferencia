// Ejercicio 9

// Se genera un arreglo de objetos
let productos = [
    {
        "producto": "leche",
        "precio": 2500,
        "disponible": true,
    },
    {
        "producto": "pan",
        "precio": 1500,
        "disponible": true,
    },
    {
        "producto": "huevos",
        "precio": 14000,
        "disponible": false,
    },
];

// Se recorre y solo se muestra el nombre
for (let item of productos) {
    console.log(`Producto: ${item.producto}`);
}