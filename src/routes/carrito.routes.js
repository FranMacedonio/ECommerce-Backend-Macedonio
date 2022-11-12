// Router
import { Router } from 'express'
const router = Router()

// Controllers
import { renderCarrito, deleteItem, deleteCarrito } from '../controllers/carrito.controller.js'

// Funciones
import { checkAuthentication } from '../helpers/auth.js'

router.route('/carrito')
        .get(checkAuthentication ,renderCarrito)
        .delete(checkAuthentication ,deleteCarrito)

router.route('/carrito/delete/:id')
        .delete(checkAuthentication, deleteItem)
export default router