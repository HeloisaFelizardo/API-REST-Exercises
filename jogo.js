/*
 Jogo escolhido
Complete o código abaixo de acordo com as instruções:

- O código deve ter uma variável chamada 'jogos' que deve conter um array com os jogos "Gears 5", "Halo Infinite", "Perfect Dark" e "Forza Horizon" (nessa ordem);
- O código também deve ter uma variável chamada 'jogo_escolhido' que deve receber o jogo "Perfect Dark" através do array anterior;
- O código deve ter uma variável chamada jogo_json que vai receber um JSON com chave "jogo" e o valor será a variável jogo_escolhido;
- O jogo_json deve ser enviado como resposta para o front-end;
*/

const express = require('express');
const app = express();

let jogos = ["Gears 5", "Halo Infinite", "Perfect Dark", "Forza Horizon"];
let jogo_escolhido = jogos[2];

let jogo_json = {jogo: jogo_escolhido};

app.get('/', (req, res) => {
    res.json(jogo_json);
});

app.listen(8080 , () => {
    console.log('Servidor iniciado');
});