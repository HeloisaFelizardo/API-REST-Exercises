/*
 Seleções de futebol
Complete o código abaixo para que seja listado uma seleção de futebol para cada um dos 10 primeiros dias do mês:

- Caso o dia do mês seja menor que 11 então o valor da seleção será correspondente ao dia do mês e deve estar associado a variável selecao. Observação: se o dia do mês for 1, selecao deve ter o valor Brasil.
- Do contrário, selecao terá o valor "Não há uma seleção para hoje".
- A resposta deve estar em um JSON com chave e valor igual a 'selecao'.
- Declarar as variáveis com let
*/
const express = require('express');
const app = express();

let selecoes = [
    {nome: 'Brasil'},
    {nome: 'Estados Unidos'},
    {nome: 'Japão'},
    {nome: 'Coréia do Sul'},
    {nome: 'Argentina'},
    {nome: 'Alemanhã'},
    {nome: 'França'},
    {nome: 'Itália'},
    {nome: 'Suécia'},
    {nome: 'Nigéria'}
];

//let data = new Date();
let dia_mes = 1;

let selecao;


if ( dia_mes < 11){
    selecao = selecoes[dia_mes - 1].nome;
}

else {
    selecao = "Não há uma seleção para hoje";
}

app.get('/', (req, res) => {
    res.json({selecao: selecao});
});

app.listen(8080 , () => {
    console.log('Servidor iniciado');
});