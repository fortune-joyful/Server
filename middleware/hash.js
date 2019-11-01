const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)

function hash(pass) {
    console.log('masuk hash')
    const hash = bcrypt.hashSync(pass, salt)
    console.log(hash)
    return hash
}

function check(pass) {
    const hash = bcrypt.hashSync(pass, salt)
    console.log(hash)
   return bcrypt.compareSync(pass,hash)
}

module.exports = {hash, check}