require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data/database');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');

const app = express();
const port = process.env.PORT || 3001;

// JSONのリクエストボディを扱えるようにする
app.use(bodyParser.json());


// === CORS対応 ===
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS'
    );
    next();
});

// === Swagger UI ===
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// === ルーティング ===
app.use('/users', require('./routes/users'));
app.use('/items', require('./routes/items'));

// ✅ Renderの動作確認用ルート（/）
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// === MongoDB 接続後にサーバーを起動 ===
mongodb.initDb((err) => {
    if (err) {
        console.error('❌ Failed to connect to database:', err);
    } else {
        app.listen(port, () => {
            console.log(`✅ Database is connected. Server is running on port ${port}`);
        });
    }
});
