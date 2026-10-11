let contador = 0;

for(let i = 0; i < 5 ; i++){
    contador++;
}

const salida2 = document.getElementById("salida2");
let texto2 = "Contador: " + contador;
salida2.textContent = texto2;