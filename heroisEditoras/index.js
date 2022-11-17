const express = require('express');
const app = express();

const heroiEditora = require('./heroiEditora');

app.get('/', (req, res) => {
    let heroi = req.query.heroi;

    let editora = heroiEditora.retornaEditora(heroi);
    res.json({editora: editora});
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});