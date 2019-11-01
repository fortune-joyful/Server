const cookieAPI = require('../apis/cookieAPI')

module.exports = {
  getRandom: (req, res, next) => {
    cookieAPI.get('/fortune')
      .then(({ data }) => {
        res.status(200).json(data)
      })
      .catch(next)
  }
}