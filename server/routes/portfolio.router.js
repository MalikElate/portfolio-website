const express = require('express');
const router = express.Router();
const portfolioData = require('../modules/portfolio-data');

// GET students
router.get('/', (req, res) => {
    res.send(portfolioData);
    console.log(portfolioData)
})

module.exports = router;