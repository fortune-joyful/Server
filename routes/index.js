const router = require('express').Router()
const cookiesRouter = require('./cookies')
const tarotRoute = require('./tarotRoute')
const ZodiacController = require('../controllers/zodiac');
const HoroscopeController = require('../controllers/horoscope');
const UserController = require('../controllers/user')
const verify = require('../middleware/googleVerify')
const {authentication}  = require('../middleware/auth')

router.post('/users/googleSignIn', verify, UserController.googleSignIn)
router.post('/users/manualSignUp', UserController.manualSignUp)
router.post('/users/manualSignIn', UserController.manualSignIn)
router.use(authentication)
router.use('/cookies', cookiesRouter)
router.use('/tarots', tarotRoute)
router.get('/detail/:signname', ZodiacController.getOne);
router.get('/horoscope/:day/:signname', HoroscopeController.getOne);

module.exports = router
