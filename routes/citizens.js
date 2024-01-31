const mongoose = require('mongoose');
const express = require('express');
const { Citizen } = require('../models/citizen')

const router = express.Router();

router.get('/', async (req, res) => {
    const citizens = await Citizen.find().select('id name city_id groups');
    res.send(citizens);
})

module.exports = router;