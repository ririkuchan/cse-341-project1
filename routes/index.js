const routes = require('express').Router();

Router.get('/', (req, res) => { res.send('Hello World!') });

module.exports = router;