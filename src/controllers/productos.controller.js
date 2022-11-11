// DAO
import ProductDAO from '../services/dao/product.dao.js'
const productos = new ProductDAO

export const renderProducts = async (req, res) => {
    res.render('products/productos', {
        nav_title: 'Productos | N.A.V',
        productos: await productos.getObj(),
        usuario: req.user
    })
}

export const renderMarca = async (req, res) => {
    const marca = await productos.findMarca(req.params.marca)
    const marcaSeleccionada = marca[0].brand
    res.render('products/marca', {
        nav_title: marcaSeleccionada.toUpperCase() + ' | N.A.V',
        productos: marca,
        marca: marcaSeleccionada,
        usuario: req.user
    })
}

export const renderProduct = async (req, res) => {
    const producto = await productos.getObj(req.params.id)
    console.log(producto)

    res.render('products/producto', {
        nav_title: producto[0].name + ' | N.A.V',
        producto,
        usuario: req.user
    })
}