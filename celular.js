/*
 Celular válido
Complete o código abaixo para que ele seja capaz de verificar se um número de celular é válido:

- O número é considerado válido se tiver exatamente 14 caracteres ((xx)xxxxx-xxxx);
- A variável 'valido' deve retornar true ou false utilizando um if ternário para checar o tamanho da string celular;
- O JSON possui chave 'telefone' e o valor é a variável 'valido'.
- Declarar as variáveis com let
*/

const express = require('express');
const app = express();

let celular = '(21)99999-9999';
let valido = celular.length == 14 ? true : false;

app.get('/', (req, res) => {
    res.json({telefone: valido});
});

app.listen(8080 , () => {
    console.log('Servidor iniciado');
});