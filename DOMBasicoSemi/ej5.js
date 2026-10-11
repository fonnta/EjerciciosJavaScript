let productos = document.getElementById("productos");
let precios = productos.querySelectorAll(".precio");
let cantidad = precios.length;

let log = document.getElementById("log");

log.textContent = "Hay " + cantidad + " de precios listados.";

let producto = document.getElementById("p1");

//En el primero se mantiene la negrita
log.innerHTML = producto.innerHTML + "<br>";

// En el segundo la negrita desaparece
log.innerHTML += producto.textContent;

let n2 = document.getElementById("n2");
n2.textContent = "Reposición completada. ¡Gracias por su paciencia!";

for (let i = 0; i < precios.length; i++) {
    let precio = parseFloat(precios[i].textContent);
    precio = precio + 0.10;
    precios[i].textContent = precio;
}

let lista = document.getElementById("lista");

// Añadir Tila
let nuevoProducto = document.createElement("li");
nuevoProducto.innerHTML = "Tila <span class='precio'>2.20</span> €";

lista.appendChild(nuevoProducto);

//Sustituir el primer elemento
let primeroElemento = lista.firstElementChild;

let productoDestacado = document.createElement("li");
productoDestacado.innerHTML = "Producto destacado <span class='precio'>9.99</span> €";

lista.replaceChild(productoDestacado, primeroElemento);

//Borrar el n2
n2.remove();

//Marcar alumnos

let alumnos = document.querySelectorAll("input[name='alumnos']");

for(let i = 0; i < alumnos.length; i++) {
    alumnos[i].checked = true;
}

log.innerHTML += "<br> Total de elementos en la lista: "+ lista.children.length;
