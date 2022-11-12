// Router
import { Router } from 'express'
const router = Router()

// Controllers
import { renderProducts, renderMarca ,renderProduct, agregarProducto } from '../controllers/productos.controller.js'

import { checkAuthentication } from '../helpers/auth.js'

router.route('/productos')
        .get(renderProducts)
        
        
        router.route('/productos/:marca')
        .get(renderMarca)
        
        router.route('/productos/:marca/:id')
        .get(renderProduct)
        .post(agregarProducto)

export default router