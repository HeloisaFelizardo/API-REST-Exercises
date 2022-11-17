const express = require('express');
const app = express();

const sistemaVotacao = require('./sistemaVotacao');

app.get('/', (req, res) => {

    let resultado = sistemaVotacao.retornaResultadoVotacao();

    res.json({mensagem: resultado});
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});