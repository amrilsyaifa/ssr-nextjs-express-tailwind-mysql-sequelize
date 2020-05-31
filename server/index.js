require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');

const port = parseInt(process.env.PORT, 10) || 3000
const APP_URL = process.env.APP_URL
var { app } = require('./app')
const handle = app.getRequestHandler()

// init routes API
var api = require('./routes')

app.prepare().then(() => {
    const server = express()
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(bodyParser.json())

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
