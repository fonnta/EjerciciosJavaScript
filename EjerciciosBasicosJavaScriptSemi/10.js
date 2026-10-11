let textoTri2 = "";
for(let i = 0; i < 20; i++) {

    for(let j = 0; j <= i; j++) {
        textoTri2 += "*";
    }
    textoTri2 += "\n";
}

const salida10 = document.getElementById('salida10');
salida10.textContent = textoTri2;