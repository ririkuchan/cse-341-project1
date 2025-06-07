const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Items & Users API',
        description: 'API for managing items and users',
    },
    host: 'project1-l4hm.onrender.com',
    schemes: ['https'],
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./server.js']; // ← ← ← ← ← ← これが一番確実なやり方！！

swaggerAutogen(outputFile, endpointsFiles, doc);
