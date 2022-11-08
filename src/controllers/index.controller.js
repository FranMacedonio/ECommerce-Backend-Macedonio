export const renderIndex = (req, res) => {
    res.render('index', {
        nav_title: 'N.A.V',
        usuario: {
            name: 'Gunball',
            img: 'https://pbs.twimg.com/profile_images/1275205116447129686/CRlJxNPm_400x400.jpg',
            email: 'gunball@gmail.com'
        }
    })
}