const express = require('express')
const ejs = require('ejs')
const path = require('path')

// Initializations
const app = express()

// Settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Middlewares
app.use(express.urlencoded({extended: false}))

// Global Variables


// Routes
app.get('/', (req, res) => {
    res.render('index', {
        navTitle: 'asd'
    })
})

// Static Files
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app