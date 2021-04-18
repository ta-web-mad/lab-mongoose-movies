const { join } = require('path')
const hbs = require('hbs')

//Partials registry
hbs.registerPartials(join(__dirname, '..', 'views', 'partials'))