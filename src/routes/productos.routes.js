// Router
import { Router } from 'express'
const router = Router()

// Controllers
import { renderProducts } from '../controllers/productos.controller.js'

router.get('/productos', renderProducts)

export default router