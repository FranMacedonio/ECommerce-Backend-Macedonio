// Router
import { Router } from 'express'
const router = Router()

// Controllers
import { renderProducts, renderProduct } from '../controllers/productos.controller.js'

router.route('/productos')
        .get(renderProducts)

router.route('/productos/:id')
        .get(renderProduct)

export default router