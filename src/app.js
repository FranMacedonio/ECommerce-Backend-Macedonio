// App
import express from 'express'
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import flash from 'connect-flash'
import session from 'express-session'

// Routes
import indexRoutes from './routes/index.routes.js'
import productsRoutes from './routes/productos.routes.js'
import apiRoutes from './routes/api.routes.js'
import usersRoutes from './routes/users.routes.js'

// Initializations
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url));

// Settings
app.set('port', process.env.PORT || 3000)
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Middlewares
app.use(express.urlencoded({extended: false}))
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(flash())

// Global Variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    next()
})

// Routes
app.use(indexRoutes)
app.use(productsRoutes)
app.use(apiRoutes)
app.use(usersRoutes)

// Static Files
app.use(express.static(join(__dirname, 'public')))

export default app