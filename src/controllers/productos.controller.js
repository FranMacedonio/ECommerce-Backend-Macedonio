// DAO
import ProductDAO from '../services/dao/product.dao.js'
const productos = new ProductDAO

export const renderProducts = async (req, res) => {
    res.render('productos', {
        productos: await productos.getObj()
    })
}