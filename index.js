const mongoose = require('mongoose');
const express = require('express');
const citizens = require('./routes/citizens');
const cities = require('./routes/cities');

const app = express();

const connectionString = process.env.CONNECTION_STRING || 'mongodb://localhost/sc-task-db';
mongoose.connect(connectionString)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/citizens', citizens);
app.use('/api/cities', cities);

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
