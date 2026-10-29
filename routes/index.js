
// Import the Express framework
const express = require('express');

// Create an Express Router to handle requests
const router = express.Router();


// ==================================================
// GET Route - Home Page
// ==================================================

// Handle GET requests to the home page (/)
router.get('/', function (req, res, next) {

    // Render the index.hbs template
    res.render('index', {

        // Pass the application title to the template
        title: 'Feedback Application',

        // Pass the author's name to the template
        author: 'Kirubel',

        // Pass the current date and time to the template
        timePageLoadedAt: new Date()
    });
});


// ==================================================
// GET Route - Student Feedback Form
// ==================================================

// Handle GET requests to /feedback-form
router.get('/feedback-form', function (req, res, next) {

    // Render student_feedback_form.hbs from the views folder
    res.render('student_feedback_form');
});


// ==================================================
// POST Route - Submit Student Feedback
// ==================================================

// Handle POST requests sent to /submit-feedback
// This route runs when the user submits the feedback form
router.post('/submit-feedback', function (req, res, next) {

    // Alternative way to read data from URL query parameters
    // Not used because this form submits data in the request body
    // const formData = req.query;

    // Read the submitted form data from the request body
    // The body-parser middleware processes the form data
    const formData = req.body;

    // Display the submitted form data in the server terminal
    console.log(formData)

    // Render the thank_you.hbs template after submission
    // Pass the submitted values to the template
    res.render('thank_you', {

        // Get the submitted student's name
        name: formData.name,

        // Get the submitted email address
        email: formData.email,

        // Get the feedback comments
        comments: formData.comments,

        // Get the selected current-student radio button value
        // Bracket notation is used because the key contains a hyphen
        currentStudent: formData['current-student']
    });
});


// ==================================================
// Export the Router
// ==================================================

// Make these routes available to server.js
// The main Express application imports this router
module.exports = router;
