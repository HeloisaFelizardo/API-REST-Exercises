/*
 Par ou Ímpar
Qual das alternativas abaixo completa corretamente os espaços vazios para que a camada de serviço e a camada REST consigam se comunicar?
*/

const express = require('express');
const app = express();

const verificaNumero = require('./verificaNumero');

app.get('/', (req, res) => {
    let numero = req.query.numero;

    let resultado = verificaNumero.parImpar(numero);

    let json = {resultado: resultado};

    res.json(json);
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});