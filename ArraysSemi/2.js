
let frecuencias = [];

for (let i = 0; i < 10; i++) {
    frecuencias[i] = 0;
}
for (let i = 0; i < 10000; i++) {
    let numero = Math.floor(Math.random() * 10) + 1;

    frecuencias[numero - 1]++;
}
console.log("Frecuencias:");

for (let i = 0; i < 10; i++) {
    console.log("Número " + (i + 1) + ": " + frecuencias[i]);
}
