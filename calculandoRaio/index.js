/*
 Calculando o raio
Complete o código para que o front-end envie o diâmetro de um círculo e seu raio seja retornado pela API:

- A camada REST deve importar a camada de serviço utilizando require e associar a importação a uma constante chamada círculo;
- O parâmetro recebido do front-end se chama diametro;
- O parâmetro deve estar associado a uma variável chamada diametro;
- A API retorna um JSON com uma chave chamada raio e o valor é a variável raio
- raio = diametro / 2;
- Todas as variáveis (com exceção de constantes) devem ser declaradas com let;
- A API retorna um JSON com chave raio e o valor é a variável raio.

*/

const express = require('express');
const app = express();

const circulo = require ('./circulo');

app.get('/', (req, res) => {
    let diametro = req.query.diametro;
    let raio = circulo.calcularRaio(diametro);
    res.json({raio: raio});
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});