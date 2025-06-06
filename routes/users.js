/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API for managing users
 */

const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

// GET all users
// #swagger.tags = ['Users']
router.get('/', usersController.getAllUsers);

// GET user by ID
// #swagger.tags = ['Users']
router.get('/:id', usersController.getUserById);

// POST new user
// #swagger.tags = ['Users']
router.post('/', usersController.createUser);

// PUT update user
// #swagger.tags = ['Users']
router.put('/:id', usersController.updateUser);

// DELETE user
// #swagger.tags = ['Users']
router.delete('/:id', usersController.deleteUser);

module.exports = router;
