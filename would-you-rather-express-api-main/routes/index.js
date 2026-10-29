const express = require('express')
const router = express.Router()
const randomWyrQuestion = require('../model/wyr_questions')

router.get('/wyr', function(req, res, next) {
    const wyrQuestion = randomWyrQuestion()
    res.json(wyrQuestion)
})

module.exports = router


