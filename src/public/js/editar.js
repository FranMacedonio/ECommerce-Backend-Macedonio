const id = document.getElementById('prodID').value
const editar = document.getElementById('editar')
editar.addEventListener('click', e => {
    e.preventDefault()
    const URL = `/admin/productos/agregar/${id}`
    const datos = { 
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        price: document.getElementById('price').value
    }
    const options = {
        method: 'PUT',
        body: JSON.stringify(datos),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    fetch(URL, options)
        .then(res => res.json())
        .then(dat => console.log(dat))
        .catch(err => console.log(err))
})