// app.js

const express = require('express');
const cors = require('cors');
let {db, nextId} = require('./db');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Get all requests
app.get('/api/requests', (req, res) => {
    res.json(db);
});

app.post('/api/requests', (req, res) => {
    const newRequest = req.body;
    newRequest.id = nextId; // Assign the next available ID
    db.push(newRequest);
    nextId++; // Increment the next ID for the next entry
    res.status(201).json(newRequest);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
