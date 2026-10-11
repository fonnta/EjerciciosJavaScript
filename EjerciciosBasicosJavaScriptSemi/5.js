let suma = 0;

for(let i = 1; i <= 50; i++) {
    if(i%4 === 0) {
        suma += i;
    }
}

const salida5 = document.getElementById('salida5');
salida5.textContent = suma;