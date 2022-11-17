/*
 Bem-vindo ao sistema
Qual das alternativas implementa corretamente o código de acordo com as orientações:

- A constante que armazena a instância do Express se chama 'application';
- Através de 'application' deve ser implementado o método utilizado para monitorar requisições HTTP;
- O método deve escutar através da porta 8080;
- Quando for executado, a mensagem 'O servidor iniciou' deve ser escrita no console.
*/

const express = require('express');
const application = express();

application.get('/', (req,res) => {
    res.json({mensagem: 'Bem-vindo ao sistema'});
});

application.listen(8080 , () => {
    console.log('O servidor iniciou');
});