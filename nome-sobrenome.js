/*
 Nome e sobrenome
Selecione a alternativa que implementa corretamente o código descrito nas instruções:

- O código possui quatro variáveis nome, sobrenome, nome_completo e nome_json;
- nome possui o valor 'Jack' e sobrenome o valor 'Joyce';
- nome_completo concatena os valores de nome e sobrenome;
- A aplicação express envia como resposta a variável nome_json.
*/

const express = require('express');
const app = express();

let nome = 'Jack';
let sobrenome = 'Joyce';

let nome_completo = nome+" "+sobrenome;

let nome_json = {nome: nome_completo};

app.get('/', (req, res) => {
    res.json(nome_json);
});

app.listen(8080 , () => {
    console.log('Servidor iniciado');
});


