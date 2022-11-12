// DAO
import ProductDAO from '../services/dao/product.dao.js'
import CartDAO from '../services/dao/cart.dao.js'
const productos = new ProductDAO
const carritos = new CartDAO

export const renderProducts = async (req, res) => {
    res.render('products/productos', {
        nav_title: 'Productos | N.A.V',
        productos: await productos.getObj(),
        usuario: req.user
    })
}

export const renderMarca = async (req, res) => {
    const marca = await productos.findMarca(req.params.marca)
    const marcaSeleccionada = marca[0].brand
    res.render('products/marca', {
        nav_title: marcaSeleccionada.toUpperCase() + ' | N.A.V',
        productos: marca,
        marca: marcaSeleccionada,
        usuario: req.user
    })
}

export const renderProduct = async (req, res) => {
    const producto = await productos.getObj(req.params.id)

    res.render('products/producto', {
        nav_title: producto[0].name + ' | N.A.V',
        producto,
        usuario: req.user
    })
}

export const agregarProducto = async (req, res) => {
    const carrito = await carritos.findEmail(req.user.email)
    const arrayCarrito = carrito.items.map(x => x.name)
    if(arrayCarrito.find(prod => prod == req.body.name)) {
        const indx = carrito.items.findIndex(n => n.name == req.body.name)
        await carritos.addCant(req.body.name, (req.body.cant + carrito.items[indx].cant))
    } else {
        await carritos.addToCart(carrito._id, req.body)
    }
}