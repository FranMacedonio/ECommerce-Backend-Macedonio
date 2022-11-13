// Router
import { Router } from 'express'
const router = Router()

// Controllers
import { renderOrdenes } from '../controllers/ordenes.controller.js'

// Funciones
import { checkAuthentication } from '../helpers/auth.js'

router.route('/ordenes')
        .get(checkAuthentication, renderOrdenes)

export default router