require('dotenv').config()

const app = require('./server')
require('./config/database')

app.listen(app.get('port'), () => {
    console.log('Server running on port', app.get('port'))
})