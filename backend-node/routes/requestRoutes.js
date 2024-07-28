const express = require('express');
const router = express.Router();
const validateRequest = require('../middlewares/validateRequest');
const {
    getRequests,
    getRequestByIdHandler, 
    createRequest,
    approveRequest,
    declineRequest
} = require('../controllers/requestController');

router.get('/requests', getRequests);
router.get('/request/:id', getRequestByIdHandler); 
router.post('/request', validateRequest, createRequest);
router.post('/request/:id/approve', approveRequest);
router.post('/request/:id/decline', declineRequest);

module.exports = router;
