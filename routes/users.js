const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

// GET all users
router.get('/', usersController.getAllUsers);

// GET user by ID
router.get('/:id', usersController.getUserById);

// POST new user
router.post('/', usersController.createUser);

// PUT update user
router.put('/:id', usersController.updateUser);

// DELETE user
router.delete('/:id', usersController.deleteUser);

module.exports = router;
