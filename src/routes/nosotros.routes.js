// Router
import { Router } from 'express'
const router = Router()

// Controllers
import { renderNosotros } from '../controllers/nosotros.controller.js'

router.route('/nosotros')
        .get(renderNosotros)

export default router