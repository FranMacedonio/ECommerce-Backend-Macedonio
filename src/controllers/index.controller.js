export const renderIndex = (req, res) => {
    res.render('index', {
        nav_title: 'N.A.V',
        usuario: req.user
    })
}