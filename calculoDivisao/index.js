const express = require('express');
const app = express();

const calculadoraDivisao = require('./calculadoraDivisao');

app.get('/', (req,res) => {
    let numero1 = req.query.numero1;
    let numero2 = req.query.numero2;

    let resultado = calculadoraDivisao.fazDivisao(numero1, numero2);
    res.json({resultado: resultado});
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});