const express = require('express');
const router = express.Router();
const Employer = require('../models/employer');

// Route to get all employers
router.get('/allemployers', async (req, res) => {
    try {
        const employers = await Employer.find();
        res.json(employers);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;
