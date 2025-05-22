const mongodb = require('../data/database');
const objectId = require('mongodb').ObjectId;

const getAll = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json([{ name: 'John' }, { name: 'Jane' }]);
};

const getSingle = async (req, res) => {
    const userId = new objectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('users').find({ _id: userId });
    result.toArray().then((users) => {
        res.setHEader('COntent-Type', 'application/json');
        res.status(200).json(users[0]);
    });
};
module.exports = {
    getAll,
    getSingle
};
