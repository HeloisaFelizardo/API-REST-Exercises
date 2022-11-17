/*
 Reescrevendo o código
Reescreva o código abaixo corrigindo os erros que encontrar:

- As partes que não possuem erro, devem ser reescritas como estão na versão original.
*/

const express = require('express');
const app = express();

let data = new Date();

let dia_mes = {conteudo: data.getDate()}

app.get('/', (req, res) => {
    res.json(dia_mes)
});

app.listen(8080, () => {
   console.log("Servidor iniciado");
});