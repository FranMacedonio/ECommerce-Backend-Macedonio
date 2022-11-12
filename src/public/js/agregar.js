// agregar al carrito
const agregar = document.getElementById('btn-agregar')
const id = agregar.getAttribute('data-id')

agregar.addEventListener('click', e => {
    e.preventDefault()
    const {_id, name, img, price, brand} = productos.find(n => n._id == id)
    const datos = {name, img, price, cant: Number(contador.innerHTML)}
    const URL = `/productos/${brand}/${_id}`

    console.log('Datos del fetch', { datos: datos, url: URL })

    const options = {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }
    fetch(URL, options)
            .then(res => res.json)
            .then(dat => console.log(dat))
            .catch(err => console.log(err))
})



// contador
const sumar = document.getElementById('sumar')
const restar = document.getElementById('restar')
const contador = document.getElementById('contador')

sumar.addEventListener('click', () => {
    const numero = Number(contador.innerHTML) + 1
    contador.innerHTML = numero
})

restar.addEventListener('click', () => {
    if(Number(contador.innerHTML) > 0) {
        const numero = Number(contador.innerHTML) - 1
        contador.innerHTML = numero
    }
})