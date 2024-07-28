
const fs = require('fs');
const path = require('path');
const { db, nextId } = require('../db');
const Request = require('../models/request');

let currentId = nextId; 

const dbFilePath = path.join(__dirname, '../db.js');

const getAllRequests = () => db;

const getRequestById = (id) => db.find(request => request.id === id);

const saveDbToFile = () => {
    const dbContent = `
let db = ${JSON.stringify(db, null, 4)};

let nextId = ${currentId};

module.exports = { db, nextId };
`;
    fs.writeFileSync(dbFilePath, dbContent, 'utf8');
};

const addRequest = (request) => {
    try {
        request.id = currentId++;
        db.push(request);
        saveDbToFile();
        console.log("Request added:", request);
    } catch (error) {
        console.error("Error adding request:", error);
    }
};

const updateRequest = (id, updateData) => {
    const request = db.find(request => request.id === id);
    if (request) {
        Object.assign(request, updateData);
        saveDbToFile();
        return request;
    }
    return null;
};

module.exports = {
    getAllRequests,
    getRequestById,
    addRequest,
    updateRequest
};
