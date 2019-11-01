const router = require('express').Router()
const tarotRoute = require('./tarotRoute')

router.use('/tarots', tarotRoute)


module.exports = router