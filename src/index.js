// DOTENV
import { config } from 'dotenv'
config()

// APP
import app from './app.js'
import './config/database.js'

app.listen(app.get('port'), () => {
    console.log('Server running on port', app.get('port'))
})