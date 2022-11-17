const express = require('express');
const app = express();

const conteudoPlataforma = require('./conteudoPlataforma');

app.get('/', (req, res) => {
    let plataforma = req.query.plataforma;

    let conteudoOriginal = conteudoPlataforma.retornaConteudoOriginal(plataforma);

    res.json({conteudo: conteudoOriginal});
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});