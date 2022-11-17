/*
 Sistema operacional
Qual das alternativas abaixo é um código que retorna via JSON um sistema operacional de um array?

- O código tem uma variável chamada id_sistema;
- O código possui um array chamado sistemas;
- O valor da variável id_sistema corresponde a um índice do array sistemas;
- A variável sistema recebe um JSON com chave 'sistema';
- O valor desse JSON é o array sistemas, utilizando como índice o id_sistema.
*/

const express = require('express');
const app = express();

let id_sistema = 2;
let sistemas = ["Linux", "Mac", "Windows"];

let sistema = {sistema: sistemas[id_sistema]};

app.get('/', (req, res) => {
    res.json(sistema);
});

app.listen(8080 , () => {
    console.log('Servidor iniciado');
});