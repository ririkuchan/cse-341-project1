const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

// すべてのユーザーを取得
const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db('contacts').collection('users').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
};

// 指定IDのユーザーを取得
const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('contacts').collection('users').find({ _id: userId });
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    });
};

module.exports = {
    getAll,
    getSingle
};