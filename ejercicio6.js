// Ejercicio 6

// Objeto personal
let usb = {
    "marca": "Unknown",
    "capacidad": "16GB",
    "tipo": "USB 3.0",
    "color": "negro",
};

// Se recorren las claves con for..of sobre Objectentries()
for (let [clave, valor] of Object.entries(usb)) {
    console.log(`${clave}: ${valor}`); // Genera un arreglo con arreglos [clave, valor]
}