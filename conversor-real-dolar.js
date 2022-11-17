/*
 Convertendo valores
Qual alternativa completa o código abaixo para que ele seja capaz de converter valores de dólar para real e vice-versa:

- O sistema possui uma variável local chamada 'conversor' que pode ter valor 'dolar' ou 'real';
- Se a opção for 'dolar', a conversão é de dólar para real (valor * 5.60);
- Se a opção for 'real', a conversão é de real para dólar (valor * 0.18);
- A checagem deve ser feita através de uma estrutura condicional utilizando a variável 'conversor' como parâmetro;
*/

const express = require('express');
const app = express();

let valor = 25.50;
let valorConvertido;
let conversor = 'dolar';

switch(conversor)
{
   case 'dolar':
        valorConvertido = valor * 5.60;
        break;

    case 'real':
        valorConvertido = valor * 0.18;
        break;
}

app.get('/', (req, res) => {
    res.json({conversao: valorConvertido});
});

app.listen (8080, () =>{
    console.log('Servidor iniciado');
});