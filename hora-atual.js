/*
 Hora atual
Complete o código abaixo para que após receber uma requisição via get ele envie uma resposta com a hora atual do servidor (apenas a hora, sem minutos):

OBS.: Utilizar o Date() do JavaScript
*/

const express = require('express');
const app = express();

let data = new Date();

app.get('/', (req, res) => {
    let hora_atual = data.getHours();
    let hora_json = {hora: hora_atual};
    res.json(hora_json);
})

app.listen(8080, () =>{
    console.log("Servidor iniciado");
});