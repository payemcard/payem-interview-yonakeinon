const express = require('express');
const cors = require('cors');
const requestRoutes = require('./routes/requestRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', requestRoutes);

app.use(errorHandler);

module.exports = app;
