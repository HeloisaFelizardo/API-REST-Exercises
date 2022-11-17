/*
 Porta 80
Complete o código abaixo com os seguintes requisitos:

- O app deve ter uma constante chamada 'app' que armazena a instância do Express;
- O app deve enviar um JSON contendo o nome do usuário como resposta;
- A chave do JSON é 'nome' e o nome do usuário é 'Carlos';
- O app deve escutar a porta 80;
- O app deve mostrar a mensagem "Servidor ligado" no console quando o servidor iniciar.
*/

const express = require('express');
const app = express();

let nome = {nome: 'Carlos'};

app.get('/', (req, res) => {
   res.json(nome) ;
});

app.listen(80 , () => {
    console.log('Servidor ligado');
});