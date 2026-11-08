class Ordenador {
    constructor(marca, modelo, precio, ram = 4, disco = 512, pulgadas = 17) {
        this.marca = marca;
        this.modelo = modelo;

        if (precio > 0) {
            this.precio = precio;
        } else {
            this.precio = 0;
        }
        if (ram > 0) {
            this.ram = ram;
        } else {
            this.ram = 4;
        }
        if (disco > 0) {
            this.disco = disco;
        } else {
            this.disco = 512;
        }
        if (pulgadas > 0) {
            this.pulgadas = pulgadas;
        } else {
            this.pulgadas = 17;
        }
    }
    toString() {
        return `${this.marca} ${this.modelo} · ${this.ram} GB RAM · ${this.disco} GB · ${this.pulgadas}"`;
    }

    comparar(otro) {

        if (this.precio < otro.precio) {
            return "más barato";
        } else if (this.precio > otro.precio) {
            return "más caro";
        } else {
            return "mismo precio";
        }
    }
}

class Portatil extends Ordenador {
    constructor(marca, modelo, precio, ram = 4, disco = 256, pulgadas = 12, autonomia = 4) {

        super(marca, modelo, precio, ram, disco, pulgadas);

        if (autonomia > 0) {
            this.autonomia = autonomia;
        } else {
            this.autonomia = 4;
        }
    }
    toString() {
        return super.toString() + ` · ${this.autonomia} horas de autonomía`;
    }
}

let catalogo = [
    new Portatil("Apple", "MacBook Air", 1199, 16, 512, 13, 18),
    new Ordenador("HP", "Pavilion", 749, 8, 1024, 24),
    new Portatil("Lenovo", "IdeaPad", 399),
    new Ordenador("Dell", "OptiPlex", 549, 8, 512, 17),
    new Portatil("ASUS", "Vivobook", 899, 16, 512, 15, 8),
    new Ordenador("Acer", "Aspire", 629)
];

const zonaCatalogo = document.getElementById("catalogo");
const filtro = document.getElementById("filtro");

function pintarCatalogo(productos) {

    zonaCatalogo.innerHTML = "";

    productos.forEach(function(producto) {

        let tipo = "Sobremesa";

        if (producto instanceof Portatil) {
            tipo = "Portátil";
        }

        let tarjeta = document.createElement("article");

        tarjeta.innerHTML = `
            <p>${tipo}</p>
            <h3>${producto.marca} ${producto.modelo}</h3>
            <p>${producto.toString()}</p>

            <div class="precio-fila">
                <span class="precio">${producto.precio} €</span>
                <button>Añadir</button>
            </div>
        `;

        let boton = tarjeta.querySelector("button");

        boton.addEventListener("click", function() {

            carrito.agregar(producto);
            pintarCarrito();

        });

        zonaCatalogo.appendChild(tarjeta);
    });
}

class Carrito {

    #productos = [];
    agregar(producto) {
        this.#productos.push(producto);
    }
    quitar(indice) {
        this.#productos.splice(indice, 1);
    }
    vaciar() {
        this.#productos = [];
    }
    getProductos() {
        return this.#productos.slice();
    }
    getCantidad() {
        return this.#productos.length;
    }
    getTotal() {
        return this.#productos.reduce(function(total, producto) {
            return total + producto.precio;
        }, 0);
    }
}

let carrito = new Carrito();

function pintarCarrito() {

    let zonaCarrito = document.getElementById("productos-carrito");
    let productos = carrito.getProductos();
    zonaCarrito.innerHTML = "";

    productos.forEach(function(producto, indice) {
        let elemento = document.createElement("p");

        elemento.innerHTML = `
            ${producto.marca} ${producto.modelo} - ${producto.precio} €
            <button>Quitar</button>
        `;

        let boton = elemento.querySelector("button");

        boton.addEventListener("click", function() {

            carrito.quitar(indice);
            pintarCarrito();

        });

        zonaCarrito.appendChild(elemento);
    });

    document.getElementById("total").textContent = carrito.getTotal() + " €";
    document.getElementById("cantidad").textContent = carrito.getCantidad();
    document.getElementById("contador").textContent = "Carrito (" + carrito.getCantidad() + ")";
}

document.getElementById("vaciar").addEventListener("click", function() {

    carrito.vaciar();
    pintarCarrito();

});

function filtrarCatalogo() {
    let productos = catalogo.slice();

    if (filtro.value === "sobremesa") {

        productos = catalogo.filter(function(producto) {
            return !(producto instanceof Portatil);
        });
    }

    if (filtro.value === "portatil") {

        productos = catalogo.filter(function(producto) {
            return producto instanceof Portatil;
        });
    }

    return productos;
}
filtro.addEventListener("change", function() {

    pintarCatalogo(filtrarCatalogo());

});

document.getElementById("ordenar").addEventListener("click", function() {

    let productos = filtrarCatalogo();

    productos.sort(function(a, b) {
        return a.precio - b.precio;
    });

    pintarCatalogo(productos);

});
const formulario = document.getElementById("formulario");
const tipo = document.getElementById("tipo");
const campoAutonomia = document.getElementById("campo-autonomia");

tipo.addEventListener("change", function() {

    if (tipo.value === "portatil") {
        campoAutonomia.style.display = "block";
    } else {
        campoAutonomia.style.display = "none";
    }
});

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let precio = Number(document.getElementById("precio").value);

    if (marca.trim() === "" || modelo.trim() === "" || document.getElementById("precio").value === "" || precio <= 0) {

        document.getElementById("error").textContent = "Rellena marca, modelo y precio correctamente.";
        return;
    }

    let ram;
    let disco;
    let pulgadas;
    let autonomia;

    if (document.getElementById("ram").value !== "") {
        ram = Number(document.getElementById("ram").value);
    }

    if (document.getElementById("disco").value !== "") {
        disco = Number(document.getElementById("disco").value);
    }

    if (document.getElementById("pulgadas").value !== "") {
        pulgadas = Number(document.getElementById("pulgadas").value);
    }

    if (document.getElementById("autonomia").value !== "") {
        autonomia = Number(document.getElementById("autonomia").value);
    }

    let producto;

    if (tipo.value === "portatil") {
        producto = new Portatil(marca, modelo, precio, ram, disco, pulgadas, autonomia);
    } else {
        producto = new Ordenador(marca, modelo, precio, ram, disco, pulgadas);
    }

    catalogo.push(producto);

    document.getElementById("error").textContent = "";

    formulario.reset();
    campoAutonomia.style.display = "none";

    pintarCatalogo(filtrarCatalogo());

});

pintarCatalogo(catalogo);
pintarCarrito();