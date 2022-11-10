// DAO
import ProductDAO from '../services/dao/product.dao.js'
const productos = new ProductDAO

export const renderProducts = async (req, res) => {
    res.render('products/productos', {
        nav_title: 'Productos',
        productos: await productos.getObj()
    })
}

export const renderProduct = async (req, res) => {
    const producto = await productos.getObj(req.params.id)
    console.log(producto)

    res.render('products/producto', {
        nav_title: producto[0].name + ' | N.A.V',
        producto
    })
}