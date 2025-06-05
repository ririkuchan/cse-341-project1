const { getDb } = require('../data/database');
const { ObjectId } = require('mongodb');

const getAllItems = async (req, res) => {
    try {
        const db = getDb();
        const items = await db.collection('items').find().toArray();
        res.status(200).json(items);
    } catch {
        res.status(500).json({ error: 'Failed to fetch items' });
    }
};

const getItemById = async (req, res) => {
    try {
        const db = getDb();
        const item = await db.collection('items').findOne({ _id: new ObjectId(req.params.id) });
        if (!item) return res.status(404).json({ error: 'Item not found' });
        res.status(200).json(item);
    } catch {
        res.status(500).json({ error: 'Invalid ID' });
    }
};

const createItem = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        if (!name || !price || !description) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        const db = getDb();
        const result = await db.collection('items').insertOne({ name, price, description });
        res.status(201).json(result);
    } catch {
        res.status(500).json({ error: 'Failed to create item' });
    }
};

const updateItem = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        if (!name || !price || !description) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        const db = getDb();
        const result = await db.collection('items').updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: { name, price, description } }
        );
        if (result.matchedCount === 0) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json(result);
    } catch {
        res.status(500).json({ error: 'Failed to update item' });
    }
};

const deleteItem = async (req, res) => {
    try {
        const db = getDb();
        const result = await db.collection('items').deleteOne({ _id: new ObjectId(req.params.id) });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch {
        res.status(500).json({ error: 'Failed to delete item' });
    }
};

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
};
