const express = require('express');
const app = express();

const escola = require ('./escola');

app.get('/', (req, res) => {
    let temAula = escola.hojeTemAula();
    res.json({temAula: temAula});
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});