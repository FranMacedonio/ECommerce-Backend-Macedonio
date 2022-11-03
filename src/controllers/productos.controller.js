const mongoose = require('mongoose')
const ProductSchema = require('../models/Product.model')

const productosCtrl = {
    renderProductos: async (req, res) => {
        const productos = await ProductSchema.find({})
        res.render('productos', { productos })
    }

}

module.exports = productosCtrl