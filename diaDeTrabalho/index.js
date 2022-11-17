

const express = require('express');
const app = express();

const diaTrabalho = require('./diaTrabalho');

app.get('/', (req, res) => {
    let trabalhaHoje = diaTrabalho.retornaDiaTrabalho();
    res.json({trabalho: trabalhaHoje});
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});