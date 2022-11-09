export const renderSingup = (req, res) => {
    res.render('signup', {
        nav_title: 'Registrarse | N.A.V',
        usuario: {
            name: 'Gunball',
            img: 'https://pbs.twimg.com/profile_images/1275205116447129686/CRlJxNPm_400x400.jpg',
            email: 'gunball@gmail.com'
        }
    })
}

export const signup = (req, res) => {
    res.send('registrado')
}

export const renderLogin = (req, res) => {
    res.render('login', {
        nav_title: 'Login | N.A.V',
        usuario: {
            name: 'Gunball',
            img: 'https://pbs.twimg.com/profile_images/1275205116447129686/CRlJxNPm_400x400.jpg',
            email: 'gunball@gmail.com'
        }
    })
}

export const login = (req, res) => {
    res.send('login')
}

export const logout = (req, res) => {
    res.send('logout')
}