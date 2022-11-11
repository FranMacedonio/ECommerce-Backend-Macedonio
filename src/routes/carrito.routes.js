// Router
import { Router } from 'express'
const router = Router()

// Controllers
import { renderCarrito } from '../controllers/carrito.controller.js'

// Funciones
import { checkAuthentication } from '../helpers/auth.js'

router.route('/carrito')
        .get(checkAuthentication ,renderCarrito)

export default router