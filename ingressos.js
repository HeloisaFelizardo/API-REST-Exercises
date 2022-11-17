/*
 Ingressos
Complete os campos em branco corretamente:

- A aplicação simula a venda de ingressos;
- Se o número de ingressos disponíveis (ingressos_disponiveis) for maior ou igual ao número de ingressos comprados (ingressos_compra) a variável resultado receberá um JSON com o número de ingressos comprados;
- Se não for, resultado recebe um JSON com a mensagem 'Ingressos insuficientes'.
*/

const express = require('express');
const app = express();

let ingressos_disponiveis = 10;
let ingressos_compra = 3;

let resultado;


if (ingressos_disponiveis >= ingressos_compra){
    resultado = {comprou: ingressos_compra};
}

else{
    resultado = {mensagem: 'Ingressos insuficientes'};
}

app.get('/', (req, res) => {
    res.json(resultado);
});

app.listen(8080 , () => {
    console.log('Servidor iniciado');
});