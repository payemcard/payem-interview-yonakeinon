const validateRequest = (req, res, next) => {
    const { name, description, amount, currency, employee_name, type } = req.body;
    const validTypes = ['Purchase Request', 'Reimbursement Request'];

    if (!name || !description || !amount || !currency || !employee_name || !type) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!validTypes.includes(type)) {
        return res.status(400).json({ error: 'Invalid request type' });
    }

    next();
};

module.exports = validateRequest;
