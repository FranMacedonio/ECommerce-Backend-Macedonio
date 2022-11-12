const precios = document.getElementsByClassName('precios')
const final = document.getElementById('precioFinal')

const renderPrecio = () => {
    precioFinal = 0
    for (const precio of precios) {
        precioFinal += Number(precio.innerHTML)
    }
    final.innerText = `$${precioFinal}`
}

renderPrecio()