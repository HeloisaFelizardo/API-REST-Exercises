/*
 Eleição
Qual alternativa abaixo implementa um código correto de acordo com as instruções:

- O código é uma aplicação de contagem de votos entre dois candidatos;
- A aplicação verifica qual candidato tem mais votos e retorna essa resposta através de um JSON;
- o JSON possui uma chave chamada 'eleicao' e o valor é o número de votos do candidato que está liderando.
*/

const express = require('express');
const app = express();

let candidato_A = 53;
let candidato_B = 49;

let mais_votos = candidato_A > candidato_B ? candidato_A : candidato_B;
let votos_json = {eleicao:  mais_votos}

app.get('/', (req, res) => {
    res.json(votos_json);
})

app.listen(8080 , () => {
    console.log('Servidor iniciado');
});