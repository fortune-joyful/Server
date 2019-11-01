const router = require('express').Router()
const cookiesRouter = require('./cookies')
const tarotRoute = require('./tarotRoute')

router.use('/cookies', cookiesRouter)
router.use('/tarots', tarotRoute)


module.exports = router
