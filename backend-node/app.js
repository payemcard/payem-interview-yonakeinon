const express = require('express');
const cors = require('cors');
const requestRoutes = require('./routes/requestRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', requestRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;
