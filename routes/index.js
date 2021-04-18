module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))

    //Celebrities URLS
    app.use('/', require('./celebrities.routes.js'))

    //Movies URLS
    app.use('/', require('./movies.routes.js'))
}