const axios = require('axios')

module.exports = axios.create({
    baseURL: 'https://rws-cards-api.herokuapp.com/api/v1/cards',
})