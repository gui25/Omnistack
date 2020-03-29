const express = require('exprees');

const routes = express.Router();

routes.post('/ongs', (request,response) => {

    const data = request.body;

    console.log(data);

    return response.json({
        
    });
});