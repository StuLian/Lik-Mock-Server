const path = require('path')
const express = require('express')
const app = express()

const getRouter = require('./router/index')

class Server {
    constructor(options) {
        const { dirname, routerPath } = options
        this.startListen(dirname, routerPath)
    }

    startListen(dirname, routerPath) {
        const options = require(path.join(dirname, routerPath))
        const router = getRouter(options)
        app.use(router)

        app.listen(3000, function () {
            console.log('mock-server-lik start')
        })
    }
}

module.exports = Server
