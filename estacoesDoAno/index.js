const express = require('express');
const app = express();

const estacao = require('./estacao');

app.get('/', (req, res) => {
    
    let estacaoAno = estacao.retornaEstacaoAno();

    res.json({estacao: estacaoAno});
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});