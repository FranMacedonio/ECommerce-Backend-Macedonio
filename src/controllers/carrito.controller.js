// DAO
import CartDAO from "../services/dao/cart.dao.js"
const carrito = new CartDAO

export const renderCarrito = async (req, res) => {
    console.log(await carrito.findEmail(req.user.email))
    res.render('carrito', {
        nav_title: 'Carrito | N.A.V',
        usuario: req.user,
        carrito: await carrito.findEmail(req.user.email)
    })
}