// DAO
import UserDAO from "../services/dao/user.dao.js"
const users = new UserDAO

export const renderSingup = (req, res) => {
    res.render('users/signup', {
        nav_title: 'Registrarse | N.A.V'
    })
}

export const signup = async (req, res) => {
    const { name, email, password, confirm_password } = req.body
    if(password !== confirm_password) {
        console.log('Las contraseñas no coinciden')
        res.redirect('/signup')
    }
    if(password.length < 6) {
        console.log('La contraseña debe tener 6 o mas caracteres')
        res.redirect('/signup')
    }
    
    const emailUser = await users.findEmail(email)
    if(emailUser) {
        console.log(emailUser)
        console.log('El email ingresado ya existe')
        res.redirect('/signup')
    } else {
        const encryptPassword = await users.encryptPassword(password)
        console.log(encryptPassword)
        users.save({name, email, password: encryptPassword})
        res.redirect('/login')
    }
}

export const renderLogin = (req, res) => {
    res.render('users/login', {
        nav_title: 'Login | N.A.V'
    })
}

export const login = (req, res) => {
    res.send('login')
}

export const logout = (req, res) => {
    res.send('logout')
}