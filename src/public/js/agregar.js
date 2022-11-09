// BOTONES
// agregar
const agregar = document.getElementById('btn-agregar')
const id = agregar.getAttribute('data-id')
// contador
const sumar = document.getElementById('sumar')
const restar = document.getElementById('restar')
const contador = document.getElementById('contador')

// EVENT LISTENERS
agregar.addEventListener('click', () => {
    const {name, img, price} = productos.find(n => n._id == id)
    console.log({name, img, price, cant: Number(contador.innerHTML)})
})

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