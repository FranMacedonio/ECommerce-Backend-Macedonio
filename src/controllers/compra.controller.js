import CartDAO from "../services/dao/cart.dao.js"
import OrderDAO from '../services/dao/order.dao.js'
const carrito = new CartDAO
const ordenes = new OrderDAO

export const renderOrdenes = async (req, res) => {
    res.render('compra', {
        nav_title: 'Compra | N.A.V',
        usuario: req.user,
        carrito: await carrito.findEmail(req.user.email)
    })
}

export const purchase = async (req, res) => {
    const { city, address, phone, finalPrice } = req.body
    const carritoUsuario = await carrito.findEmail(req.user.email)
    const orden = await ordenes.save({
        email: req.user.email,
        items: carritoUsuario.items,
        city,
        address,
        phone,
        finalPrice
    })
    await carrito.deleteCarrito(req.user.email)
    res.redirect('/')
}