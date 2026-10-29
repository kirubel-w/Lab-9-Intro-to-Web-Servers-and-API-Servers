
// Import Express to create the web server
const express = require('express')

// Import path to work with folder locations
const path = require('path')

// Import the router from routes/index.js
const indexRouter = require('./routes/index')

// Create the Express application
const app = express()


// Set the location of the public folder
const staticFileLocation = path.join(__dirname, 'public')

// Allow Express to serve CSS and other static files
app.use(express.static(staticFileLocation))


// Set the location of the Handlebars templates
app.set('views', path.join(__dirname, 'views'))

// Use Handlebars as the template engine
app.set('view engine', 'hbs')

// Make the routes available to the application
app.use('/', indexRouter)

// Start the server on port 3000
let server = app.listen(process.env.PORT || 3000, function () {
    console.log('Express server running on port', server.address().port)
})
