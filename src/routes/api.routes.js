// Router
import { Router } from 'express'
const router = Router()

// Controllers
import { renderApi } from '../controllers/api.controller.js'

router.get('/api/productos', renderApi)

export default router