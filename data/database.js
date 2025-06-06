const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGODB_URL);  // ← オプション不要！

let database;

const initDb = async (callback) => {
    if (database) {
        console.log('Db is already initialized!');
        return callback(null, database);
    }

    try {
        await client.connect();
        database = client.db('contacts');  // あなたのDB名：contacts → OK
        console.log('Database connected');
        callback(null, database);
    } catch (err) {
        callback(err);
    }
};

const getDatabase = () => {
    if (!database) {
        throw new Error('Database not initialized');
    }
    return database;
};

module.exports = {
    initDb,
    getDatabase
};
