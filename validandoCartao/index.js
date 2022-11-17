/*
 Validando cartão
O código a seguir é um validador simples de número de cartão de crédito. 
Complete os espaços em branco para que o código funcione conforme a lista de pedidos:

- O parâmetro recebido do front-end se chama numeroCartao;
- O número é valido se a quantidade de caracteres for igual a 12.
*/

const express = require('express');
const app = express();

const verificaCartao = require('./verificaCartao');

app.get('/', (req, res) => {
    let numeroCartao = req.query.numeroCartao;

    let cartaoValido = verificaCartao.validaCartao(numeroCartao);
    res.json({cartaoValido: cartaoValido});
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});