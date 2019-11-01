const axios = require('axios');

class ZodiacController {
    static getOne(req, res, next) {
        axios.get(`https://zodiacal.herokuapp.com/${req.params.signname}`)
            .then(respone => {
                console.log('dsada');
                res.status(200).json(respone.data)
            })
            .catch(next);
    }
};

module.exports = ZodiacController;