const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Define user routes
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile/:id', userController.profile);

module.exports = router;
