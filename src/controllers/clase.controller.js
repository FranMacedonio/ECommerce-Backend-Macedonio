// DAO
import ProductDAO from '../services/dao/product.dao.js'
const productos = new ProductDAO

export const renderClase = async (req, res) => {
    const clase = await productos.findCategory(req.params.category)
    const categoriaSeleccionada = clase[0].category
    res.render('products/ropa', {
        nav_title: categoriaSeleccionada.toUpperCase() + ' | N.A.V',
        productos: clase,
        marca: categoriaSeleccionada,
        usuario: req.user
    })
}