let textoTri = "";

for(let i = 0; i < 20; i++) {
    for(let j = 0; j < 20 -i; j++) {
        textoTri += "*";
    }

    textoTri += "\n";
}

const salida9 = document.getElementById('salida9');
salida9.textContent = textoTri;
