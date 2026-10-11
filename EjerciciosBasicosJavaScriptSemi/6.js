let texto = "";
for(let i = 20; i >= 1; i--) {
    if(i % 3 === 0 && i % 5 === 0) {
        texto += "FizzBuzz\n";
    } else if (i % 3 === 0) {
        texto += "Fizz\n";
    } else if (i % 5 === 0) {
        texto += "Buzz\n";
    } else {
        texto += i + "\n";
    }
}

const salida6 = document.getElementById('salida6');
salida6.textContent = texto;