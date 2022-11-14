// Router
import { Router } from 'express'
const router = Router()

// Controllers
import { renderApi, renderUsuarios } from '../controllers/api.controller.js'

router.get('/api/productos', renderApi)
router.get('/api/usuarios', renderUsuarios)

export default router