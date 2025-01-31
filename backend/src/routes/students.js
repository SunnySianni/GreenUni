const express = require('express');
const router = express.Router();
const { getStudentData } = require('../controllers/studentController');
const auth = require('../middleware/auth');

router.get('/:id', auth, getStudentData);

module.exports = router;