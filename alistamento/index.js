/*
 Alistamento
Complete o código abaixo seguindo as instruções:

- O código é para uma aplicação de alistamento militar;
- A API recebe o parâmetro anoNascimento do front-end;
- A camada de serviço calcula a idade com base no ano de nascimento e o ano atual;
- O ano atual é capturado através do Date() do JS;
- A API retorna para o front-end um JSON com a chave alistar e valor booleano true ou false;
- O valor deve ser true se idade for igual a 18 e false caso contrário.
*/

const express = require('express');
const app = express();

const alistamento = require('./alistamento');

app.get('/', (req, res) => {
    let anoNascimento = req.query.anoNascimento;
    let alistar = alistamento.verificaAlistamento(anoNascimento);

    res.json({alistar: alistar});
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});