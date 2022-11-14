const botones = document.getElementsByClassName('eliminarProd')
for (const boton of botones) {
    boton.addEventListener('click', e => {
        e.preventDefault()
        const prod = boton.getAttribute('data-id')
        const URL = `/admin/productos/agregar/${prod}`
        const options = {
            method: 'DELETE',
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        }
        fetch(URL, options)
            .then(dat => console.log(dat))
            .catch(err => console.log(err))
        const div = document.getElementById(prod)
        div.remove()
    })
}