var nota = 9;

let mensajeNotas;

switch(true) {
    case nota >= 9:
    mensajeNotas = "sobresaliente";
    break;

    case nota >= 7:
    mensajeNotas ="Notable";
    break;

    case nota >= 5:
    mensajeNotas = "Aprobado";
    break;

    default: 
    mensajeNotas = "Suspenso";
    break;
}

if(nota >= 9) {
    console.log("Felicidades");
}

const salida4 = document.getElementById('salida4');
let texto4 = mensajeNotas;
salida4.textContent = texto4;