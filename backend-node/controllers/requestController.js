const { getAllRequests, getRequestById, addRequest, updateRequest } = require('../utils/database');
const { ValidationError, NotFoundError } = require('../errors/errors');

const getRequests = (req, res, next) => {
  try {
    const { name, status, employeeName } = req.query;
    console.log('Filter Parameters:', { name, status, employeeName });
    let requests = getAllRequests();

    if (name) {
      requests = requests.filter(request => request.name.includes(name));
    }
    if (status) {
      requests = requests.filter(request => request.status.includes(status));
    }
    if (employeeName) {
      requests = requests.filter(request => request.employee_name.includes(employeeName));
    }

    console.log('Filtered Requests:', requests);
    res.json(requests);
  } catch (error) {
    next(error);
  }
};

const getRequestByIdHandler = (req, res, next) => {
  try {
    const requestId = parseInt(req.params.id);
    const request = getRequestById(requestId);
    if (!request) {
      throw new NotFoundError('Request not found');
    }
    res.json(request);
  } catch (error) {
    next(error);
  }
};

const createRequest = (req, res, next) => {
  try {
    console.log('Incoming create request:', req.body);
    const { name, description, amount, currency, employee_name } = req.body;
    let { type } = req.body;

    if (!name || !description || !amount || !currency || !employee_name) {
      throw new ValidationError('Missing required fields');
    }

    const lowerCaseName = name.toLowerCase();

    if (!type) {
      if (lowerCaseName.includes('purchase')) {
        type = 'Purchase Request';
      } else if (lowerCaseName.includes('reimbursement')) {
        type = 'Reimbursement Request';
      } else {
        type = 'Other';
        console.log('Name does not contain "Purchase" or "Reimbursement". Assigning default type "Other".');
      }
    }

    const newRequest = {
      id: null,
      name,
      description,
      amount,
      currency,
      employee_name,
      status: 'Pending',
      created_at: new Date(),
      updated_at: null,
      approved_amount: 0,
      type
    };
    addRequest(newRequest);
    console.log('Request created:', newRequest);
    res.status(201).json(newRequest);
  } catch (error) {
    next(error);
  }
};

const approveRequest = (req, res, next) => {
  try {
    const requestId = parseInt(req.params.id);
    const request = updateRequest(requestId, { status: 'Approved', updated_at: new Date() });
    if (!request) {
      throw new NotFoundError('Request not found');
    }
    res.json(request);
  } catch (error) {
    next(error);
  }
};

const declineRequest = (req, res, next) => {
  try {
    const requestId = parseInt(req.params.id);
    const request = updateRequest(requestId, { status: 'Declined', updated_at: new Date() });
    if (!request) {
      throw new NotFoundError('Request not found');
    }
    res.json(request);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getRequests,
  getRequestByIdHandler,
  createRequest,
  approveRequest,
  declineRequest
};
