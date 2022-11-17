/*
 Login e Senha
Seguindo as orientações da camada de serviço definidas abaixo, complete a camada REST do sistema de login:

- A camada de serviço se chama dadosLogin.js;
- A camada de serviço tem uma função chamada fazAutenticacao;
- Essa função recebe como parâmetro o login e a senha (nessa ordem) e retorna uma string com uma chave de autorização;
- A API deve importar a camada de serviço através do require;
- A importação deve ser associada a uma constante chamada dadosLogin;
- A API recebe do front-end o login e a senha através dos parâmetros login e senha respectivamente;
- Os parâmetros são armazenados em variáveis com seus respectivos nomes;
- As variáveis são utilizadas como parâmetros para retornar a autenticação através da função fazAutenticacao;
- A API retorna um JSON para o front-end contendo a chave de autenticação;
- O JSON é formatado com a chave autenticacao e o valor é a variável autenticacao;
- Todas as variáveis, com exceção das constantes, devem ser declaradas com let.
*/

const express = require('express');
const app = express();

const dadosLogin = require('./dadosLogin');

app.get('/', (req, res) => {
    let login = req.query.login;
    let senha = req.query.senha;

    let autenticacao = dadosLogin.fazAutenticacao(login, senha);
    res.json({autenticacao: autenticacao});
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});