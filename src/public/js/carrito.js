const botones = document.getElementsByClassName('eliminar')
const botonEliminar = document.getElementById('botonEliminar')
const precios = document.getElementsByClassName('precios')
const final = document.getElementById('precioFinal')

// Botones de eliminar producto del carrito
for (const boton of botones) {
    boton.addEventListener('click', () => {
        const prod = boton.getAttribute('data-id')
        const URL = `/carrito/delete/${prod}`
        const options = {
            method: 'DELETE',
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        }
        fetch(URL, options)
            .then(dat => console.log(dat))
            .catch(err => console.log(err))
        
        const row = document.getElementById(prod)
        const carritoContainer = document.getElementById('carrito_container')
        const carritoVacio = document.getElementById('carrito_vacio')
        row.remove()
        renderPrecio()
        if(final.innerText == '$0') {
            carritoContainer.remove()
            carritoVacio.innerHTML = `<h1>Tu carrito esta vacio</h1>
            <p>Navega por nuestra pagina para ver la ropa que te ofrecemos.</p>
            <div id="carrito_opciones_container">
                <div class="carrito_opciones">
                    <h2>Marcas</h2>
                    <div>
                        <a href="/productos/nike">nike</a>
                        <a href="/productos/adidas">adidas</a>
                        <a href="/productos/vans">vans</a>
                    </div>
                </div>
                <div class="carrito_opciones">
                    <h2>Prendas</h2>
                    <div>
                        <a href="/categoria/remeras">remeras</a>
                        <a href="/categoria/pantalones">pantalones</a>
                        <a href="/categoria/zapatillas">zapatillas</a>
                    </div>
                </div>
            </div>`
        }
    })
}

// Boton para eliminar el carrito
botonEliminar.addEventListener('click', () => {
    const URL = `/carrito`
    const options = {
        method: 'DELETE'
    }
    fetch(URL, options)
        .then(dat => console.log(dat))
        .catch(err => console.log(err))
      
    const carritoContainer = document.getElementById('carrito_container')
    const carritoVacio = document.getElementById('carrito_vacio')
    carritoContainer.remove()
    carritoVacio.innerHTML = `<h1>Tu carrito esta vacio</h1>
    <p>Navega por nuestra pagina para ver la ropa que te ofrecemos.</p>
    <div id="carrito_opciones_container">
        <div class="carrito_opciones">
            <h2>Marcas</h2>
            <div>
                <a href="/productos/nike">nike</a>
                <a href="/productos/adidas">adidas</a>
                <a href="/productos/vans">vans</a>
            </div>
        </div>
        <div class="carrito_opciones">
            <h2>Prendas</h2>
            <div>
                <a href="/categoria/remeras">remeras</a>
                <a href="/categoria/pantalones">pantalones</a>
                <a href="/categoria/zapatillas">zapatillas</a>
            </div>
        </div>
    </div>`
})

// Render precio total del carrito
const renderPrecio = () => {
    precioFinal = 0
    for (const precio of precios) {
        precioFinal += Number(precio.innerHTML)
    }
    final.innerText = `$${precioFinal}`
}

renderPrecio()