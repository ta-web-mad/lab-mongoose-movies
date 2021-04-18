const baseURL = require('./base.routes.js')
const celebURL = require('./celebrities.routes.js')


module.exports = app => {

    // Base URLS
    app.use('/', baseURL)
    app.use('/celebrities', celebURL)
}