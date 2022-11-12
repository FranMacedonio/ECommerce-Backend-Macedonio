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
export const deleteItem = async (req, res) => {
    await carrito.deleteItem(req.user.email, req.params.id)
}