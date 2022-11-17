const express = require('express');
const app = express();

const conversorPeso = require('./conversorPeso');

app.get('/', (req, res) => {
    let libra = req.query.libra;

    let kg = conversorPeso.LibraParaQuilo(libra);
    res.json({kg: kg});
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});