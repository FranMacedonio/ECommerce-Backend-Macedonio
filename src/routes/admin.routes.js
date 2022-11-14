// Router
import { Router } from 'express'
const router = Router()

// Controllers
import { renderProductsAdmin, renderAgregarAdmin, renderEditarAdmin, editar, agregar, eliminar } from '../controllers/admin.controller.js'

import { checkAdmin } from '../helpers/auth.js'

router.get('/admin', (req, res) => {
    res.redirect('/admin/productos')
})

router.route('/admin/productos')
        .get(checkAdmin, renderProductsAdmin)
        
router.route('/admin/productos/agregar')
        .get(checkAdmin, renderAgregarAdmin)
        .post(checkAdmin, agregar)

router.route('/admin/productos/agregar/:id')
        .get(checkAdmin, renderEditarAdmin)
        .put(checkAdmin, editar)
        .delete(checkAdmin, eliminar)

export default router