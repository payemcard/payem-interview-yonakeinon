const { getAllRequests, getRequestById, addRequest, updateRequest } = require('../utils/database');
const Request = require('../models/request');

const getRequests = (req, res) => {
    try {
        const { type, status } = req.query;
        let requests = getAllRequests();

        if (type) {
            requests = requests.filter(request => request.type === type);
        }
        if (status) {
            requests = requests.filter(request => request.status === status);
        }

        res.json(requests);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getRequestByIdHandler = (req, res) => {
    try {
        const requestId = parseInt(req.params.id);
        const request = getRequestById(requestId);
        if (request) {
            res.json(request);
        } else {
            res.status(404).json({ error: 'Request not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createRequest = (req, res) => {
    try {
        const { name, description, amount, currency, employee_name } = req.body;
        let { type } = req.body;

        if (!name || !description || !amount || !currency || !employee_name) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        if (!type) {
            if (name.includes('Purchase')) {
                type = 'Purchase Request';
            } else if (name.includes('Reimbursement')) {
                type = 'Reimbursement Request';
            } else {
                return res.status(400).json({ error: 'Invalid request name' });
            }
        }

        const newRequest = new Request(
            null,
            name,
            description,
            amount,
            currency,
            employee_name,
            'Pending',
            new Date(),
            null,
            0, 
            type
        );
        addRequest(newRequest);
        res.status(201).json(newRequest);
    } catch (error) {
        console.error("Error creating request:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const approveRequest = (req, res) => {
    try {
        const requestId = parseInt(req.params.id);
        const request = updateRequest(requestId, { status: 'Approved', updated_at: new Date() });
        if (request) {
            res.json(request);
        } else {
            res.status(404).json({ error: 'Request not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const declineRequest = (req, res) => {
    try {
        const requestId = parseInt(req.params.id);
        const request = updateRequest(requestId, { status: 'Declined', updated_at: new Date() });
        if (request) {
            res.json(request);
        } else {
            res.status(404).json({ error: 'Request not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getRequests,
    getRequestByIdHandler,
    createRequest,
    approveRequest,
    declineRequest
};
