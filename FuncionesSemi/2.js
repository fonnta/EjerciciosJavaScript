
function pedirPalabras() {
    
    let palabras = [];
    let palabra;
    while (true) {
        palabra = prompt("Introduce una palabra:");
        if (palabra === null) {
            break;
        }

        palabras.push(palabra.trim());
    }
    return palabras;
}

function contarPalabras(palabras) {
    let mapa = new Map();

    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];

        if (mapa.has(palabra)) {
            mapa.set(palabra, mapa.get(palabra) + 1);
        } else {
            mapa.set(palabra, 1);
        }
    }
    return mapa;
}

function mostrarResultado(mapa) {
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "<h2>Frecuencia de palabras</h2>";

    for (let [palabra, cantidad] of mapa) {
        resultado.innerHTML += "<p>" + palabra + ": " + cantidad + "</p>";
    }
}
let palabras = pedirPalabras();
let frecuencias = contarPalabras(palabras);
mostrarResultado(frecuencias);
