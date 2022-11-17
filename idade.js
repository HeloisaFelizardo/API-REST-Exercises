/*
 Idade
Complete o código abaixo para que seja montado corretamente o código descrito nas instruções:

- O código possui quatro variáveis ano_nascimento, ano_atual idade e idade_json;
- A variável ano_nascimento possui o valor 1991;
- A variável ano_atual pega o ano utilizando o método 'getFullYear' do Date do JavaScript;
- A idade do usuário deve ser calculada utilizando as variáveis ano_atual e ano_nascimento;
- O resultado do cálculo deve ser atribuído à variável idade;
- A variável idade_json deve ter uma chave 'idade' e o valor deve vir da variável idade;
- A aplicação express envia como resposta um json contendo a idade do usuário;
- A requisição é feita via get.
- As variáveis devem ser declaradas com let
*/

const express = require('express');
const app = express();

let data = new Date();

let ano_nascimento = 1991;
let ano_atual = data.getFullYear();

let idade = ano_atual - ano_nascimento;

let  idade_json = {idade: idade};

app.get('/', (req, res) => {
    res.json(idade_json);
});

app.listen(8080, () => {
   console.log("Servidor iniciado");
});