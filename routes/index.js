const baseURL = require('./base.routes.js')
const celebURL = require('./celebrities.routes.js')
const movieURL = require('./movies.routes.js')


module.exports = app => {

    // Base URLS
    app.use('/', baseURL)
    app.use('/celebrities', celebURL)
    app.use('/movies', movieURL)
}