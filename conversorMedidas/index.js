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