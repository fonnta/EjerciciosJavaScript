let textoInversa = "";

for(let i = 0; i < 20; i ++) {
    for(let j = 19; j > i; j--) {
        textoInversa += " ";
    }  
    textoInversa += "*\n";
}

const salida8 = document.getElementById('salida8');
salida8.textContent = textoInversa;