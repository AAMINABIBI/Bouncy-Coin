const express = require('express');
const { PORT } = require('./config/index');
const dbconnect = require('./database/index');
const router=require('./routes/index');
const errorHandler=require('./middlewares/errorHandler')
console.log(`Configured port: ${PORT}`);
const app = express();

app.use(express.json());
app.use(router);

dbconnect();

app.use(errorHandler);

app.listen(PORT, (err) => {
    if (err) {
        console.error(`Error starting server on port ${PORT}:`, err);
        process.exit(1);
    }
    console.log(`Backend is running on port: ${PORT}`);
});
