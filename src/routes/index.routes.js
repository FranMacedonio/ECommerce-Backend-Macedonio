// Router
import { Router } from 'express'
const router = Router()

// Controllers
import { renderIndex } from '../controllers/index.controller.js'

router.get('/', renderIndex)

export default router