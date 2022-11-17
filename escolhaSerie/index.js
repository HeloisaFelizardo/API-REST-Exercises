const express = require('express');
const app = express();

const series = require('./series');

app.get('/', (req, res) => {
    let identificador = req.query.identificador;

    let serie = series.escolheSerie(identificador);
    let serieJSON = {serie: serie};

   res.json(serieJSON);
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});