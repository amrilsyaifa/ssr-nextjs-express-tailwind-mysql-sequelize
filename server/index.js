require('dotenv').config()
require('./xmpp')
const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const port = parseInt(process.env.PORT, 10) || 3000
const APP_URL = process.env.APP_URL
var { app } = require('./App')

const handle = app.getRequestHandler()


// init routes API
var api = require('./routes')


app.prepare().then(() => {
    const server = express()
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(bodyParser.json())
    server.use(cookieParser())



    //routes API
    server.use(process.env.API_URL, api)

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on ${APP_URL}:${port}`)
    })
})



