/*
 Conversor de temperatura
Qual das alternativas abaixo implementa corretamente um conversor de Celsius para Fahrenheit e responde a requisição com o valor convertido?
*/
const express = require('express');
const app = express();

let celsius = 42;
let fahrenheit;

fahrenheit = (celsius * 1.8) + 32;

let temperatura = {temperatura: fahrenheit};

app.get('/', (req, res) => {
    res.json(temperatura);
})

app.listen(8080 , () => {
    console.log('Servidor iniciado');
});