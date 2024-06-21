const express = require('express');
const { PORT } = require('./config/index');
const dbconnect = require('./database/index');

console.log(`Configured port: ${PORT}`);
const app = express();

dbconnect();

app.get('/', (req, res) => {
    res.send('hello world.......');
});

app.listen(PORT, (err) => {
    if (err) {
        console.error(`Error starting server on port ${PORT}:`, err);
        process.exit(1);
    }
    console.log(`Backend is running on port: ${PORT}`);
});
