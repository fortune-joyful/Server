const axios = require('axios');

class HoroscopeController {
    static getOne(req, res, next) {
        axios.get(`http://horoscope-api.herokuapp.com/horoscope/${req.params.day}/${req.params.signname}`)
            .then(respone => {
                console.log('dsada');
                res.status(200).json(respone.data)
            })
            .catch(next);
    }
};

module.exports = HoroscopeController;