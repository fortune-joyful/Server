const router = require('express').Router()
const cookiesRouter = require('./cookies')
const tarotRoute = require('./tarotRoute')
const ZodiacController = require('../controllers/zodiac');
const HoroscopeController = require('../controllers/horoscope');

router.use('/cookies', cookiesRouter)
router.use('/tarots', tarotRoute)
router.get('/detail/:signname', ZodiacController.getOne);
router.get('/horoscope/:day/:signname', HoroscopeController.getOne);

module.exports = router;