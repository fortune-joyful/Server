const User = require('../models/user')
const jwt = require('jsonwebtoken')
const {hash, check} = require('../middleware/hash')


class UserController {

    static manualSignUp(req, res, next) {
        console.log('masukkkkkk')
        console.log(req.body)
        User.create({
            email : req.body.email,
            pass : hash(req.body.pass)
        })
        .then(user => {
            let payloadjwt = {
                id : user._id,
                email : user.email
            }
            let token = jwt.sign(payloadjwt, process.env.PASS_SECRET)
            res.status(201).json({token})
        })
        .catch(next)
    }

    static googleSignIn(req, res, next) {
        console.log('masuk')
        User.findOne({email: req.payloadGoogle.email})
        .then(user => {
            if (user) {
                console.log('user dah ada');
                return user
            } else {
                console.log('user belum ada');
                console.log(process.env.PASS_SECRET);
                
                console.log(hash(process.env.PASS_SECRET))
                return User.create({
                    email : req.payloadGoogle.email,
                    pass : hash(process.env.PASS_SECRET)
                })
            }
        })
        .then(user => {
            console.log(user);
            let payloadjwt = {
                id : user._id,
                email : user.email
            }
            let token = jwt.sign(payloadjwt, process.env.PASS_SECRET)
            res.status(201).json({token})
        })
        .catch(next)
    }

    static manualSignIn(req, res, next) {
        console.log('masuk manual sign in')
        User.findOne({
            email : req.body.email
        })
        .then(user => {
            console.log(user)
            if (!user) {
                next({message : 'Username/Password is wrong'})
            } else {
                console.log('kesini')
                console.log(req.body.pass)
                if (!check(req.body.pass)) {
                    console.log('masuk gagal');
                    next({message : 'Username/Password is wrong'}) 
                } else {
                    console.log('masuk hampir berhasil')
                    let payloadjwt = {
                        id : user._id,
                        email : user.email
                    }
                    let token = jwt.sign(payloadjwt, process.env.PASS_SECRET)
                    console.log(token)
                    res.status(201).json({token})
                }
            }
        })
        .catch(next)
    }

    static coba(req,res,next) {
        console.log('masuk test')
        res.status(200).json({'masuk': 'oke'})
    }
}

module.exports = UserController