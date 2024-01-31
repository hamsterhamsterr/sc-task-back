const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    id: Number,
    name: String,
    data: String
})

const City = mongoose.model('City', citySchema);

exports.City = City;