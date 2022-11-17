/*
 Centímetros para metros
Complete corretamente as duas camadas da aplicação de conversão de centímetros para metros:

obs: a chave do JSON deve de retorno deve se chamar metros

*/

const express = require('express');
const app = express();

const conversorMedidas = require('./conversorMedidas');

app.get('/', (req, res) => {
    let centimetros = req.query.centimetros;
    let metros = conversorMedidas.centimetrosParaMetros(centimetros);

    res.json(metros);
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});