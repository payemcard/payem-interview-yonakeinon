const { ValidationError } = require('../errors/errors');

const validateRequest = (req, res, next) => {
  const { name, description, amount, currency, employee_name } = req.body;

  if (!name || typeof name !== 'string' || name.trim() === '' || !isNaN(name)) {
    throw new ValidationError('Name must be a non-empty string');
  }
  if (!description || typeof description !== 'string' || description.trim() === '') {
    throw new ValidationError('Description must be a non-empty string');
  }
  if (typeof amount !== 'number' || amount <= 0 || isNaN(amount)) {
    throw new ValidationError('Amount must be a positive number');
  }
  if (!currency || typeof currency !== 'string' || currency.trim() === '') {
    throw new ValidationError('Currency must be a non-empty string');
  }
  if (!employee_name || typeof employee_name !== 'string' || employee_name.trim() === '') {
    throw new ValidationError('Employee name must be a non-empty string');
  }

  next();
};

module.exports = validateRequest;
