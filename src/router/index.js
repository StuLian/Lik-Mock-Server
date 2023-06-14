const express = require('express')
const router = express.Router()

module.exports = function getRouter(options = []) {
    options.map(option => {
        const { method, url, data } = option
        router[method](url, (req, res) => {
            res.json({
                code: 200,
                data,
                success: true,
                message: "request ok"
            })
        })
    })

    return router
}
