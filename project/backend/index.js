const express = require('express');

const app = express();

app.get('/', (request,response) => {

    return response.json({
        evento: 'semana OmniStak 11.0',
        aluno: 'Guilherme Bernardo'
    });
});
app.listen(3333);