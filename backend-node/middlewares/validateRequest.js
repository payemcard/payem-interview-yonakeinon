const validateRequest = (req, res, next) => {
    const { name, description, amount, currency, employee_name } = req.body;
  
    if (!name || !description || !amount || !currency || !employee_name) {
      console.log('Validation Error: Missing required fields');
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    if (typeof name !== 'string') {
      console.log('Validation Error: Name must be a string');
      return res.status(400).json({ error: 'Name must be a string' });
    }
    if (typeof description !== 'string') {
      console.log('Validation Error: Description must be a string');
      return res.status(400).json({ error: 'Description must be a string' });
    }
    if (typeof amount !== 'number' || amount <= 0) {
      console.log('Validation Error: Amount must be a positive number');
      return res.status(400).json({ error: 'Amount must be a positive number' });
    }
    if (typeof currency !== 'string') {
      console.log('Validation Error: Currency must be a string');
      return res.status(400).json({ error: 'Currency must be a string' });
    }
    if (typeof employee_name !== 'string') {
      console.log('Validation Error: Employee name must be a string');
      return res.status(400).json({ error: 'Employee name must be a string' });
    }
  
    next();
  };
  
  module.exports = validateRequest;
  