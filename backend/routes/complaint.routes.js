const express = require('express');
const {
    getComplaints,
    getComplaint,
    createComplaint,
    updateComplaint,
    deleteComplaint,
} = require('../controllers/complaint.controller');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');
const upload = require('../middleware/upload');

// All routes are protected
router.use(protect);

router
    .route('/')
    .get(getComplaints)
    .post(upload.array('evidence', 5), createComplaint);

router
    .route('/:id')
    .get(getComplaint)
    .put(authorize('Admin'), updateComplaint)
    .delete(authorize('Admin'), deleteComplaint);

module.exports = router;
