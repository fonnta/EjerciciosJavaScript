alert("Bienvenido a la web");

let nombre = prompt("Introduce tu nombre:");

console.log(nombre);

alert("Bienvenido a la web "+nombre);

let primerNumero = prompt("Introduce un número");
let segundoNumero = prompt("Introduce otro número");

let suma = parseInt(primerNumero) + parseInt(segundoNumero);

alert("La suma de tus números es: "+suma);

let edad = prompt("Introduce tu edad:");

if(edad >= 18) {
    alert("Eres mayor de edad");
} else {
    alert("Eres menor de edad");
}