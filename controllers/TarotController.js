const tarotApi = require('../apis/tarot')


class TarotController{

    static getCard(req, res, next){
        tarotApi.get('/random?n=1')
            .then(({ data }) =>{
                res.status(200).json(data)
            })
            .catch(next)
    }


}

module.exports = TarotController