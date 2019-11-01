const route = require('express').Router()
const cookiesRouter = require('./cookies')

route.use('/cookies', cookiesRouter)
module.exports = route