
let listaCompra = ["leche", "pan", "huevos"];

let lista = document.getElementById("lista");
let contador = document.getElementById("contador");

let inputProducto = document.getElementById("input-producto");
let buscador = document.getElementById("buscador");

let btnAgregar = document.getElementById("btn-agregar");
let btnEliminar = document.getElementById("btn-eliminar");
let btnOrdenar = document.getElementById("btn-ordenar");

// Mostrar la lista
function mostrarLista() {
    lista.innerHTML = "";

    let textoBusqueda = buscador.value.toLowerCase();

    for (let producto of listaCompra) {

        if (producto.toLowerCase().includes(textoBusqueda)) {

            let elemento = document.createElement("li");
            elemento.textContent = producto;
            elemento.addEventListener("click", function() {

                // Eliminar producto al hacer clic
                let posicion = listaCompra.indexOf(producto);
                listaCompra.splice(posicion, 1);
                mostrarLista();
            });
            lista.appendChild(elemento);
        }
    }

    // Actualizar el contador
    if (listaCompra.length === 0) {
        contador.textContent = "La lista está vacía";
    } else if (listaCompra.length === 1) {
        contador.textContent = "Tienes 1 producto en la lista";
    } else {
        contador.textContent = "Tienes " + listaCompra.length + " productos en la lista";
    }
}

// Añadir producto
function agregarProducto() {

    let producto = inputProducto.value.trim();
    if (producto !== "") {
        let repetido = false;
        for (let elemento of listaCompra) {
            if (elemento.toLowerCase() === producto.toLowerCase()) {
                repetido = true;
            }
        }
        if (repetido) {
            alert("Este producto ya está en la lista");
        } else {
            listaCompra.push(producto);
        }
    }

    inputProducto.value = "";
    mostrarLista();
}

// Añadir al pulsar el botón
btnAgregar.addEventListener("click", function() {
    agregarProducto();
});

// Eliminar último producto
btnEliminar.addEventListener("click", function() {
    listaCompra.pop();
    mostrarLista();
});

// Buscar productos
buscador.addEventListener("input", function() {
    mostrarLista();
});

// Añadir al pulsar Intro
inputProducto.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarProducto();
    }
});

// Ordenar alfabéticamente
btnOrdenar.addEventListener("click", function() {
    listaCompra.sort();
    mostrarLista();
});

// Mostrar la lista al cargar la página
mostrarLista();
