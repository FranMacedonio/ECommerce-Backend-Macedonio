// Router
import { Router } from 'express'
const router = Router()

// Controllers
import { renderProducts, renderMarca ,renderProduct } from '../controllers/productos.controller.js'

router.route('/productos')
        .get(renderProducts)

        
router.route('/productos/:marca')
        .get(renderMarca)

router.route('/productos/:marca/:id')
        .get(renderProduct)

export default router