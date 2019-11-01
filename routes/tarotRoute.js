const router = require('express').Router()
const TarotController = require('../controllers/TarotController')

router.get('/', TarotController.getCard)

module.exports = router