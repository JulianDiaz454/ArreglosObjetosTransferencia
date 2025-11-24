// Ejericicio 4

// Objeto de celular
let celular = {
    "marca": "Samsung",
    "modelo": "Galaxy S25 Ultra",
    "año": "2025",
    "estado": "nuevo",
}

// Se muestra cada propiedad del objeto
for (let propiedad in celular) {
    console.log(`${propiedad}: ${celular[propiedad]}`);
}