const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
  
    if (err.name === 'NotFoundError') {
      return res.status(404).json({ error: err.message });
    }
  
    res.status(500).json({ error: 'An unexpected error occurred' });
  };
  
  module.exports = errorHandler;
  