/*
 CPF
Complete o código abaixo de acordo com as instruções:

- A aplicação deve ter uma constante chamada application que recebe o express();
- A aplicação deve ter uma variável cpf contendo um json corretamente formatado;
- O JSON deve ter chave cpf e o valor '123.456.789-00';
- A aplicação deve escutar a porta 8080;
- A mensagem 'Servidor iniciado' deve ser escrita no console.
*/

const express = require('express');
const application = express();

let cpf = {cpf: '123.456.789-00'};

application.get( '/', (req, res) => {
   res.json(cpf);
});

application.listen(8080, () => {
   console.log("Servidor iniciado");
});