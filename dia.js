/*
 Complete o código
Complete o código com as partes faltantes para enviar um JSON contendo o dia do mês atual para o front-end:

- Utilizar require
- Utilizar let na declaração das variáveis
*/
const express = require('express');
const application = express();

let data = new Date();

let dia_mes = {dia: data.getDate()};

application.get('/', (req, res) => {
    res.json(dia_mes) ;
});

application.listen(8080, () => {
  console.log("Servidor iniciado") ;
});