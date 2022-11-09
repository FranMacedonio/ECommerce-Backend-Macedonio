// DAO
import ProductDAO from '../services/dao/product.dao.js'
const productos = new ProductDAO

export const renderApi = async (req, res) => {
    res.json(await productos.getObj())
}