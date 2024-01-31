const mongoose = require('mongoose');

const citizenSchema = new mongoose.Schema({
    id: Number,
    name: String,
    city_id: Number,
    groups: [Object]
})

const Citizen = mongoose.model('Citizen', citizenSchema);

exports.Citizen = Citizen;