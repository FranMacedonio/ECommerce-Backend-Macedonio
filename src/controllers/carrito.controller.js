export const renderCarrito = (req, res) => {
    res.render('carrito', {
        nav_title: 'Carrito | N.A.V',
        usuario: req.user
    })
}