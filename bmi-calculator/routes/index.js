
// Import Express to create routes
const express = require('express')

// Create an Express router
const router = express.Router()

// Handle GET requests to the home page
router.get('/', function (req, res, next) {
    // Render the index.hbs template
    res.render('index', { title: 'BMI Calculator' })
})

// Handle GET requests to the BMI form page
router.get('/bmi-form', function (req, res, next) {
    // Display the BMI input form
    res.render('bmi_form')
})

// Handle GET requests to calculate BMI
router.get('/calculate', function (req, res, next) {

    // Read height and weight from the URL query
    const height = Number(req.query.height)
    const weight = Number(req.query.weight)

    // Check that both values are valid positive numbers

    // Check if height or weight is missing or invalid
    if (!height || !weight || height <= 0 || weight <= 0) {
        return res.status(400).send('Please enter valid height and weight values.')
    }

    // Calculate BMI using the height and weight
    const bmi = weight / (height * height)

    // Round the result to two decimal places
    const bmiResult = bmi.toFixed(2)

    // Render the result page with the calculated BMI
    res.render('result', { bmi: bmiResult })
})

// Export the router for use in server.js
module.exports = router
