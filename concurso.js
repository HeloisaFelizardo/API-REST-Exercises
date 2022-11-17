/*
 Concurso público
Para ser classificado em um concurso público, o candidato precisa ter nota maior que 7. Utilizando if ternário, complete o código para que isso seja feito:

- A variável 'resultado' deve receber o if ternário. Se 'nota' for maior que 7 o valor 'Classificado' deve ser atribuído à variável resultado;
- Se 'nota' não for maior que 7 o valor 'Desclassificado' deve ser atribuído à variável resultado;
- O valor retornado na resposta deve ser um json com chave 'resultado' e o valor deve ser a variável resultado.
- Declarar as variáveis com let
*/

const express = require('express');
const app = express();

let nota = 8;
let resultado = nota > 7 ? 'Classificado' : 'Desclassificado' ;

app.get('/', (req, res) => {
    res.json ({resultado: resultado});
});

app.listen(8080 , () => {
    console.log('Servidor iniciado');
});