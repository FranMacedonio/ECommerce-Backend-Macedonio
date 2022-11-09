// Router
import { Router } from 'express'
const router = Router()

// Controllers
import { logout, login, renderLogin, signup, renderSingup } from '../controllers/users.controller.js'

router.route('/signup')
        .get(renderSingup)
        .post(signup)

router.route('/login')
        .get(renderLogin)
        .post(login)

router.route('/logout')
        .get(logout)

export default router