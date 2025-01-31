const express = require('express');
const router = express.Router();
const { registerForCourse } = require('../controllers/courseController');
const auth = require('../middleware/auth');

router.post('/register', auth, registerForCourse);

module.exports = router;