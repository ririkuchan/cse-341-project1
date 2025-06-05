const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users API',
        description: 'Users API for managing user data',
    },
    host: 'project1-l4hm.onrender.com', // ← localhostからRenderのURLに変更！
    schemes: ['https'], // ← httpsだけでOK
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['routes/users.js'];

// This will generate swagger_output.json
swaggerAutogen(outputFile, endpointsFiles, doc);
