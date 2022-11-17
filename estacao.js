/*
 Estações do ano
Qual das alternativas abaixo completa o código para que ele consiga retornar a estação do ano com base no mês atual? 
*/

const express = require('express');
const app = express();

let data = new Date();
let mes = data.getMonth();

let estacaoAno;

if(mes == 0 || mes == 1 || mes == 2){
    estacaoAno = 'Verão';
} else if(mes == 3 || mes == 4 || mes == 5) {
    estacaoAno = 'Outono';
} else if(mes == 6 || mes == 7 || mes == 8){
    estacaoAno = 'Inverno';
} else{
    estacaoAno = 'Primavera';
}

app.get('/', (req, res) => {
    res.json({estacao: estacaoAno});
});

app.listen(8080 , () => {
    console.log('Servidor iniciado');
});