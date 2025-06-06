const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

let database;

const initDb = (callback) => {
    if (database) {
        console.log('Db is already initialized!');
        return callback(null, database);
    }

    MongoClient.connect(process.env.MONGODB_URL)
        .then((client) => {
            database = client.db('contacts');  // ⭐️ ここを追加！
            console.log('Database connected');
            callback(null, database);
        })
        .catch((err) => {
            callback(err);
        });
};


const getDb = () => {
    if (!database) {
        throw new Error('Database not initialized');
    }
    return database;
};

module.exports = { initDb, getDb };
