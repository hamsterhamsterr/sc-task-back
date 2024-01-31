// const mongoose = require('mongoose');
const db = require('./db/mongo-db')
const express = require('express');
const citizens = require('./routes/citizens');
const cities = require('./routes/cities');

const app = express();

const connectionString = process.env.CONNECTION_STRING || 'mongodb://localhost/sc-task-db';

db.connect(connectionString)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log(err));

app.use(express.json());
app.use('/api/citizens', citizens);
app.use('/api/cities', cities);

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
