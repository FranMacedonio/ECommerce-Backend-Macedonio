// DAO
import ProductDAO from '../services/dao/product.dao.js'
const productos = new ProductDAO

export const renderProducts = async (req, res) => {
    res.render('productos', {
        nav_title: 'Productos',
        productos: await productos.getObj(),
        usuario: {
            name: 'Gunball',
            img: 'https://pbs.twimg.com/profile_images/1275205116447129686/CRlJxNPm_400x400.jpg',
            email: 'gunball@gmail.com'
        }
    })
}

export const renderProduct = async (req, res) => {
    const producto = await productos.getObj('6364473184a300f720fc8074')
    console.log(producto)

    res.render('producto', {
        nav_title: 'Producto',
        producto,
        usuario: {
            name: 'Gunball',
            img: 'https://pbs.twimg.com/profile_images/1275205116447129686/CRlJxNPm_400x400.jpg',
            email: 'gunball@gmail.com'
        }
    })
}