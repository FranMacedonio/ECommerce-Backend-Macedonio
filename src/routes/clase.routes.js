import { Router } from 'express'
const router = Router()

// Controllers
import { renderClase } from '../controllers/clase.controller.js'

router.route('/categoria/:category')
        .get(renderClase)
        
export default router