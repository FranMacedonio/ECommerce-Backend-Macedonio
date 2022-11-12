export const renderNosotros = async (req, res) => {
    res.render('nosotros', {
        nav_title: 'Nosotros | N.A.V',
        usuario: req.user
    })
}