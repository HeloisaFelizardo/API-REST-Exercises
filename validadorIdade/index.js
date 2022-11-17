const express = require('express');
const app = express();

const validadorIdade = request('./validadorIdade');

app.get('/', (req, res) => {
    let idade = req.query.idade;
    let permitido = validadorIdade.verificaIdade(idade);

    req.json({permitido : permitido});
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});