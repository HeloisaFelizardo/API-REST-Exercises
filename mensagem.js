/*
 Corrigindo os erros
Reescreva partes do código abaixo para corrigir os erros:

- O código só deve ser alterado onde houver erro;
- O código deve ser reescrito exatamente como está no original se não houver erro no trecho a ser preenchido;
- O servidor deve escutar a porta 8080.
*/

const express = require('express');
const app = express();

let email = {email: 'superteste@email.com'};

app.get('/', (req, res) => {
    res.json(email);
})

app.listen(8080 , () => {
    console.log('Servidor iniciado');
});