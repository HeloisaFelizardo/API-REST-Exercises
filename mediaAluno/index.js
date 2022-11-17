/*
 Média do aluno
Complete o código abaixo para que ele possa receber quatro notas do front-end e retornar a média do aluno:

OBS.: os parâmetros das notas se chamam n1, n2, n3 e n4
*/

const express = require('express');
const app = express();

const alunos = require('./alunos');

app.get('/', (req, res) => {
    let n1 = req.query.n1;
    let n2 = req.query.n2;
    let n3 = req.query.n3;
    let n4 = req.query.n4;

    let media = alunos.calculaMedia(n1, n2, n3, n4);
    res.json({media: media});
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});