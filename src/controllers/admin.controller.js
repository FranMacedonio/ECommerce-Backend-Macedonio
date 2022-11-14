import ProductDAO from '../services/dao/product.dao.js'
const productos = new ProductDAO

export const renderProductsAdmin = async (req, res) => {
    res.render('admin/admin', {
        nav_title: 'ADMINISTRADOR',
        productos: await productos.getObj(),
        usuario: req.user
    })
}

export const renderAgregarAdmin = async (req, res) => {
    res.render('admin/agregar', {
        nav_title: 'AGREGAR',
        usuario: req.user
    })
}

export const renderEditarAdmin = async (req, res) => {
    const producto = await productos.getObj(req.params.id)
    res.render('admin/editar', {
        nav_title: 'EDITAR',
        producto,
        usuario: req.user
    })
}

export const agregar = async (req, res) => {
    await productos.save(req.body)
    res.redirect('/admin/productos')
}

export const editar = async (req, res) => {
    await productos.editar(req.params.id, req.body)
    res.redirect('/admin/productos')
}

export const eliminar = async (req, res) => {
    await productos.deleteObj(req.params.id)
    res.redirect('/admin/productos')
}