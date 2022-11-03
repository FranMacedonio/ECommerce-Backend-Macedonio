const { Router } = require('express')
const router = Router()
const productosCtrl = require('../controllers/productos.controller')

router.get('/productos', productosCtrl.renderProductos)

module.exports = router