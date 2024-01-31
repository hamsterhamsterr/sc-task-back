const mongoose = require('mongoose');
const fs = require('fs/promises');
const { Citizen } = require('../models/citizen');
const { City } = require('../models/city')

const citizensFilePath = './json/citizens.json';
const citiesFilePath = './json/cities.json';

async function connect(connectionString) {
    await mongoose.connect(connectionString);
    await importJsonData(Citizen, citizensFilePath);
    await importJsonData(City, citiesFilePath);
}

async function importJsonData(Model, jsonFile) {
    const jsonData = await fs.readFile(jsonFile);

    await Model.insertMany(JSON.parse(jsonData));

    console.log(`Data imported into ${Model.collection.name}`);
}

exports.connect = connect;