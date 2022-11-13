import OrderDAO from '../services/dao/order.dao.js'
const ordenes = new OrderDAO

export const renderOrdenes = async (req, res) => {
    console.log(await ordenes.getOrders(req.user.email))
    res.render('ordenes', {
        nav_title: 'Ordenes | N.A.V',
        usuario: req.user,
        ordenes: await ordenes.getOrders(req.user.email)
    })
}