const verifyJWT = require('./verifyJWT')
const User = require('../models/user')

function authentication (req, res, next){
  console.log('masuk aunth')
  try {
    const secret = process.env.PASS_SECRET
    let decodedToken = verifyJWT(req.headers.token, secret)
    console.log(decodedToken)
    User.findById(decodedToken.id)
      .then(user => {
        if(user){
          console.log('found!')
          req.loggedUser = decodedToken
          next()
        }
        else{
          next({ status: 401, message: 'Authentication Failed' })
        }
      })
      .catch(next)
  }
  catch(err) {
    next({ status: 401, message: "err" })
  }
}


module.exports = { authentication}
