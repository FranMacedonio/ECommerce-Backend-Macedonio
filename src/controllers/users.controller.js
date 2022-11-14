import passport from "passport"
import ejs from 'ejs'
import { transporter } from '../config/nodemailer.js'

// DAO
import UserDAO from "../services/dao/user.dao.js"
import CartDAO from "../services/dao/cart.dao.js"
const users = new UserDAO
const carrito = new CartDAO


export const renderSingup = async (req, res) => {
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
    const { name, email, password, img } = req.body
        const encryptPassword = await users.encryptPassword(password)
        await users.save({name, email, password: encryptPassword, img})
        await carrito.save({email, items: []})
        ejs.renderFile(process.cwd() + "/src/views/email/signup.ejs", {
            usuario: {name, email, password}
        })
            .then(body => {
                transporter.sendMail({
                    from: process.env.MAIL,
                    to: email,
                    subject: 'N.A.V | Nuevo Registro',
                    html: body
                })
            })
            .catch(e => console.log(e))
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
    successRedirect: '/'
})

export const logout = (req, res) => {
    req.logout(err => {
        if(err) return next(err)
        res.redirect('/login')
    })
}