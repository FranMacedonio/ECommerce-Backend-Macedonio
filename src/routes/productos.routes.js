// Router
import { Router } from 'express'
const router = Router()

// Controllers
import { renderProducts, renderProduct } from '../controllers/productos.controller.js'

router.get('/productos', renderProducts)
router.get('/asd', renderProduct)

export default router