const express = require('express');
const app = express();

const sistemaBancario = require('./sistemaBancario');

app.get('/', (req, res) => {
    let agencia = req.query.agencia;
    let conta = req.query.conta;

    let saldo = sistemaBancario.retornaSaldoConta(agencia, conta);

    res.json({saldo: saldo});
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});