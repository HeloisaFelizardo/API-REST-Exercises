/*
 Linguagem de programação
Qual alternativa completa corretamente o código abaixo de forma que o sistema retorne o nome do aplicativo e a linguagem de programação em que ele foi desenvolvido com base em um id?

- A resposta deve ser formatada em JSON;
- A variável 'aplicativos' contém um array que armazena o nome do aplicativo e a linguagem de programação que ele foi feito;
- O índice 0 corresponde ao aplicativo calculadora;
- O índice 1 corresponde ao aplicativo chat;
- O índice 2 corresponde ao aplicativo transporte.
*/

const express = require('express');
const app = express();

let id_aplicativo = 1;

let aplicativos = [
    {nome: 'Calculadora', linguagem: 'PHP'},
    {nome: 'Chat', linguagem: 'C#'},
    {nome: 'Transporte', linguagem: 'Java'}
];

let tecnologia = aplicativos[id_aplicativo];

app.get('/', (req, res) => {
    res.json(tecnologia);
});

app.listen(8080 , () => {
    console.log('Servidor iniciado');
});