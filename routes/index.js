const routes = require('express').Router();

router.use('/', require('./swagger'));

routes.get('/', (req, res) => {
    //swagger.tags=['Hello World']
    res.send('Hello World!');
});

routes.use('/users', require('./users'));

module.exports = routes;