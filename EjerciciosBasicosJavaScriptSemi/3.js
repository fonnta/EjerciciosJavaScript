//con var, let el resultado es Adiós dentro del bloque y Hola fuera del bloque,
//con let, let el resultado es Adiós dentro del bloque y Hola fuera del bloque,
//con var, var el resultado es Adiós dentro del bloque y Adiós fuera del bloque.

var mensaje = "Hola";

if (true) {

    let mensaje = "Adiós";
    const salida3 = document.getElementById("salida3");
    let texto3 = "Dentro del bloque: " + mensaje;
    salida3.innerHTML = texto3;

    console.log(mensaje);
}

const salida3 = document.getElementById("salida3");
let texto3 = "Fuera del bloque: " + mensaje;
salida3.innerHTML += "<br>" + texto3;

console.log(mensaje);


