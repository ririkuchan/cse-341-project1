const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data/database');

const app = express();
const port = process.env.PORT || 3000;

// JSONのリクエストボディを扱えるようにする
app.use(bodyParser.json());

// === CORS 設定（Render や Web ブラウザからのアクセス許可） ===
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // すべてのオリジン許可（セキュリティ高めたい場合はここを制限）
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

// ルーティングの読み込み
app.use('/', require('./routes'));

// MongoDB 接続後にサーバーを起動
mongodb.initDb((err) => {
    if (err) {
        console.error(err);
    } else {
        app.listen(port, () => {
            console.log(`✅ Database is connected. Server is running on port ${port}`);
        });
    }
});
