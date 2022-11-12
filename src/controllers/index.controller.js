export const renderIndex = async (req, res) => {
    res.render('index', {
        nav_title: 'N.A.V',
        usuario: req.user
    })
}