function verifyJWT(token, secret) {
    // console.log(token,'token');
    // console.log(secret);
    const jwt = require('jsonwebtoken')
    const decoded = jwt.verify(token, secret)
    console.log(decoded,'kkkkkk');
    
    return decoded
}

module.exports = verifyJWT