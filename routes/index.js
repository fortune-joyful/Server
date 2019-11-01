const ZodiacController = require('../controllers/zodiac');
const HoroscopeController = require('../controllers/horoscope');
const route = require('express').Router()

route.get('/detail/:signname', ZodiacController.getOne);
route.get('/horoscope/:day/:signname', HoroscopeController.getOne);
module.exports = route;