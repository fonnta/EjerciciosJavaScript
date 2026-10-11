let textoFigura = "";

for(let i = 0; i < 20; i++) {
    for(let j = 0; j < i; j ++) {
        textoFigura += " ";
    }

    textoFigura += "*\n";
}

const salida7 =document.getElementById("salida7");
salida7.textContent = textoFigura;