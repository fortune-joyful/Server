const router = require('express').Router()
const UserController = require('../controllers/user')
const verify = require('../middleware/googleVerify')
const {authentication}  = require('../middleware/auth')

router.get('/users/test', authentication, UserController.coba)
router.post('/users/googleSignIn', verify, UserController.googleSignIn)
router.post('/users/manualSignUp', UserController.manualSignUp)
router.post('/users/manualSignIn', UserController.manualSignIn)


module.exports = router