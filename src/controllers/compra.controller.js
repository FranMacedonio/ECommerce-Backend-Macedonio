import CartDAO from "../services/dao/cart.dao.js"
import OrderDAO from '../services/dao/order.dao.js'
const carrito = new CartDAO
const ordenes = new OrderDAO

import moment from 'moment'
import ejs from 'ejs'
import { transporter } from '../config/nodemailer.js'

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
        finalPrice,
        date: moment().format('DD-MM-YYYY, LT')
    })
    await carrito.deleteCarrito(req.user.email)
    ejs.renderFile(process.cwd() + "/src/views/email/compra.ejs", {
        usuario: req.user,
        orden
    })
        .then(body => {
            transporter.sendMail({
                from: process.env.MAIL,
                to: orden.email,
                subject: 'N.A.V | Resumen de compra',
                html: body
            })
        })
        .then(() => res.redirect('/'))
        .catch(e => console.log(e))
}