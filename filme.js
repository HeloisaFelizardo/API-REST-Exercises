/*
 Filme do dia
Complete o código abaixo de forma que ele seja capaz de recomendar um filme para cada dia da semana:

- A variável filmes recebe um array com uma lista de filmes
- Utilizar Date();
- a variável filme deve receber o valor do array 'filmes' e o índice do array deve ser definido de acordo com o dia da semana;
- A mensagem deve ser passada através de um JSON com chave 'sugestao' e o valor é a variável 'filme'.
- Declarar as variáveis com let
*/

const express = require('express') ;
const app = express();

let filmes = [
    {nome: 'Vingadores'},
    {nome: 'Liga da Justiça'},
    {nome: 'Capitão América: Guerra Civil'},
    {nome: 'Harry Potter e o enigma do príncipe'},
    {nome: 'Your Name.'},
    {nome: 'Naruto: Road to Boruto'},
    {nome: 'Thor: Ragnarok'}
];

let data = new Date();
let dia_semana = data.getDay();

let filme = filmes[dia_semana].nome;

app.get('/', (req, res) => {
    res.json({sugestao: filme});
});

app.listen(8080 , () => {
    console.log('Servidor iniciado');
});