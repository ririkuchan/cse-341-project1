const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users Api',
        description: 'Users Api',
    },
    host: 'localhost:3000',
    schemes: ['https', 'http'],
};


const outputFile = './swagger_output.json';
const endpointsFiles = ['routes/users.js'];

//this will generate the swagger_.json
swaggerAutogen(outputFile, endpointsFiles, doc);