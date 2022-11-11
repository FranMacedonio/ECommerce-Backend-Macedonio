import passport from "passport"

// DAO
import UserDAO from "../services/dao/user.dao.js"
const users = new UserDAO

export const renderSingup = (req, res) => {
    if(req.isAuthenticated()) {
        res.redirect('/')
    } else {
        res.render('users/signup', {
            nav_title: 'Registrarse | N.A.V',
            usuario: req.user
        })
    }
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
        users.save({name, email, password: encryptPassword, img:'/images/usuarios/usuario.jpg'})
        res.redirect('/login')
    }
}

export const renderLogin = (req, res) => {
    if(req.isAuthenticated()) {
        res.redirect('/')
    } else {
        res.render('users/login', {
            nav_title: 'Login | N.A.V',
            usuario: req.user
        })
    }
}

export const login = passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/',
    failureFlash: true
})

export const logout = (req, res) => {
    req.logout(err => {
        if(err) return next(err)
        res.redirect('/login')
    })
}