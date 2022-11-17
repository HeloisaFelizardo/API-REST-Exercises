/*
 Senha forte ou senha fraca
Qual das alternativas abaixo implementa corretamente um código que verifica se uma variável chamada 'senha' é forte ou fraca e retorna essa informação?

- A senha é considerada forte se ela possuir mais de sete caracteres, do contrário é uma senha fraca.
*/

const express = require('express');
const application = express();

let senha = '132541ab';
let nivelSenha = senha.length > 7 ? 'Senha forte' : 'Senha fraca';

let resposta = {senha: nivelSenha};

application.get('/', (req, res) => {
    res.send(resposta);
});

application.listen(8080 , () => {
    console.log('Servidor iniciado');
});