// Router
import { Router } from 'express'
const router = Router()

// Controllers
import { renderCarrito, deleteItem } from '../controllers/carrito.controller.js'

// Funciones
import { checkAuthentication } from '../helpers/auth.js'

router.route('/carrito')
        .get(checkAuthentication ,renderCarrito)

router.route('/carrito/delete/:id')
        .delete(checkAuthentication, deleteItem)
export default router