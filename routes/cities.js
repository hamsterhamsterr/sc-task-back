const mongoose = require('mongoose');
const express = require('express');
const { City } = require('../models/city');

const router = express.Router();

router.get('/', async (req, res) => {
    const cities = await City.find();
    res.send(cities);
})

module.exports = router;