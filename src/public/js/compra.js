const precios = document.getElementsByClassName('precios')
const final = document.getElementById('precioFinal')
const form = document.getElementById('form')
const renderPrecio = () => {
    precioFinal = 0
    for (const precio of precios) {
        precioFinal += Number(precio.innerHTML)
    }
    final.innerText = `${precioFinal}`
    form.innerHTML += `<input type="hidden" name="finalPrice" value="${precioFinal}">`
}
renderPrecio()
