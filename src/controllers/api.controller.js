// DAO
import ProductDAO from '../services/dao/product.dao.js'
import UserDAO from '../services/dao/user.dao.js'
const productos = new ProductDAO
const users = new UserDAO

export const renderApi = async (req, res) => {
    res.json(await productos.getObj())
}

export const renderUsuarios = async (req, res) => {
    res.json(await users.getObj())
}