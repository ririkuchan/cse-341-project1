/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API for managing users
 */
const express = require('express');
const router = express.Router();
const {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
} = require('../controllers/items'); // ← controller も必要です

router.get('/',
    /* #swagger.tags = ['Items']
       #swagger.description = 'Get all items'
    */
    getAllItems
);

router.get('/:id',
    /* #swagger.tags = ['Items']
       #swagger.description = 'Get item by ID'
    */
    getItemById
);

router.post('/',
    /* #swagger.tags = ['Items']
       #swagger.description = 'Create new item'
    */
    createItem
);

router.put('/:id',
    /* #swagger.tags = ['Items']
       #swagger.description = 'Update item'
    */
    updateItem
);

router.delete('/:id',
    /* #swagger.tags = ['Items']
       #swagger.description = 'Delete item'
    */
    deleteItem
);



module.exports = router;
