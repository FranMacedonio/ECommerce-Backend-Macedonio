// Router
import { Router } from 'express'
const router = Router()

// Controllers
import { renderOrdenes, purchase } from '../controllers/compra.controller.js'

// Funciones
import { checkAuthentication } from '../helpers/auth.js'

router.route('/orden')
        .get(checkAuthentication, renderOrdenes)
        .post(checkAuthentication, purchase)

export default router