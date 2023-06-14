const path = require('path')
const Server = require('../index')

const options = {
    dirname: path.dirname(__dirname),
    routerPath: '/test/options.js'
}

const mockServer = new Server(options)
