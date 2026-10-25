
function pedirPalabras() {
    
    let palabras = [];
    let palabra;
    while (true) {
        palabra = prompt("Introduce una palabra:");

        if (palabra === null || palabra.trim() === "") {
            break;
        }
        palabras.push(palabra.trim());
    }
    return palabras;
}

function eliminarRepetidas(palabras) {
    return [...new Set(palabras)];
}

function ordenarPalabras(palabras) {
    palabras.sort();
    palabras.reverse();

    return palabras;
}

function mostrarPalabras(palabras) {
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "<h2>Palabras ordenadas de la Z a la A</h2>";
    for (let i = 0; i < palabras.length; i++) {
        resultado.innerHTML += "<p>" + palabras[i] + "</p>";
    }
}

let palabras = pedirPalabras();
palabras = eliminarRepetidas(palabras);
palabras = ordenarPalabras(palabras);
mostrarPalabras(palabras);
