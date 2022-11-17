/*
 Área do triângulo
Complete o código para que o front-end envie a base e a altura e a sua área seja retornada pela API:

- Os parâmetros recebidos do front-end se chamam base e altura ;
- A API retorna um JSON com uma chave chamada area e o valor é a variável areaTriangulo;
- area = (base * altura) / 2;
- Todas as variáveis (com exceção de constantes) devem ser declaradas com let.
*/

const express = require('express');
const app = express();

const triangulo = require('./triangulo');

app.get('/', (req, res) => {
    let base = req.query.base;
    let altura = req.query.altura;

    let areaTriangulo = triangulo.calcularAreaTriangulo(base, altura);

    res.json({area: areaTriangulo});
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});