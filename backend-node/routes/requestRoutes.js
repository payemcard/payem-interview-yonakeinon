const express = require('express');
const router = express.Router();
const { createRequest, getRequests, getRequestByIdHandler, approveRequest, declineRequest } = require('../controllers/requestController');
const validateRequest = require('../middlewares/validateRequest');

router.get('/requests', getRequests);
router.get('/requests/:id', getRequestByIdHandler);
router.post('/requests', validateRequest, createRequest);
router.post('/requests/:id/approve', approveRequest);
router.post('/requests/:id/decline', declineRequest);

module.exports = router;
