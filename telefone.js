/*
 Telefone
Selecione a alternativa que completa o código seguindo as instruções:

- A aplicação deve ter uma variável telefone contendo um JSON corretamente formatado;
- O JSON deve ter chave telefone;
- A aplicação deve escutar a porta 8080;
- A mensagem 'Servidor iniciado' deve ser escrita no console.
*/

const express = require('express');
const app = express();

let telefone = {telefone: '(21) 99999-8888'};

app.get('/', (req, res) => {
    res.json(telefone);
});

app.listen(8080, () =>{
    console.log("Servidor iniciado");
});