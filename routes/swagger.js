const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json'); // 生成された swagger_output.json を読み込む
router.use('/api-docs', swaggerUi.serve); // /api-docs で Swagger UI を表示
router.get('/api-docs', swaggerUi.serve.setup(swaggerDocument));

module.exports = router;

