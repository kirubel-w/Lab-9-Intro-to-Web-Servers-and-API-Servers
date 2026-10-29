
 // Import Express to create the web server
const express = require('express');

// Import path to work with file and folder paths
const path = require('path');

// Import body-parser to read data submitted through forms
const bodyParser = require('body-parser');


// Import the router that handles requests for different pages
const indexRouter = require('./routes/index.js');

// Create an Express application
const app = express();

// Parse form data sent through POST requests
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Set the location of the public folder for static files
const staticFileLocation = path.join(__dirname, 'public');

// Allow Express to serve static files like CSS and images
app.use(express.static(staticFileLocation));

// Set the folder where the Handlebars templates are stored
app.set('views', path.join(__dirname, 'views'));

// Use Handlebars (hbs) as the template engine
app.set('view engine', 'hbs');

// Use the index router to handle requests starting at '/'
app.use('/', indexRouter);

// Start the server on the assigned port or port 3000
const server = app.listen(process.env.PORT || 3000, function () {
   // Display the port number when the server starts
   console.log('server running on port', server.address().port)
})
