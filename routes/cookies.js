const router = require('express').Router()
const CookieController = require('../controllers/cookie')

router.get('/fortune', CookieController.getRandom)

module.exports = router