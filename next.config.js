require('dotenv').config()

module.exports = {
    serverRuntimeConfig: {
        // Will only be available on the server side
        MY_SECRET: process.env.MY_SECRET,
        APP_KEY: process.env.APP_KEY,
        APP_DEBUG: process.env.APP_DEBUG,
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        APP_NAME: process.env.APP_NAME,
        APP_ENV: process.env.APP_ENV,
        API_URL: process.env.API_URL,
        PORT: process.env.PORT,
        APP_URL: process.env.APP_URL
    },
}