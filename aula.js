/*
 Aula do dia
Complete o código abaixo para que o sistema retorne a aula correspondente ao dia da semana:

Segunda - Matemática
Terça - Física
Quarta - Química
Quinta - Português
Sexta - Geografia

- A correspondência deve seguir a lista de aulas acima;
- As aulas são de segunda a sexta e nesse período a variável 'aula' deve receber o valor da matéria correspondente ao array 'materias';
- Utilizar o Date();
- A resposta é um JSON com chave e valor igual a 'aula';
- Declarar as variáveis com let
*/

const express = require('express');
const app = express();

let materias = [
    {nome: 'Matemática'},
    {nome: 'Física'},
    {nome: 'Química'},
    {nome: 'Poruguês'},
    {nome: 'Geografia'}
];

//let data = new Date();
let dia_semana = 5;

let aula;

if ( dia_semana > 0 && dia_semana < 6 ) {
    aula = materias[dia_semana - 1].nome;  
}

else{
    aula = "Hoje não tem aula";
}

app.get('/', (req, res) => {
    res.json({aula: aula});
});

app.listen(8080 , () => {
    console.log('Servidor iniciado');
});