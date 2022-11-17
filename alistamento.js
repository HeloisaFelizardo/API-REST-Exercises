/*
 Alistamento
Complete o código abaixo de acordo com as orientações:

- O código deve ter uma variável idade;
- A variável idade deve ter o valor 17;
- O código deve ter uma variável chamada 'alistamento';
- Se o usuário tiver 17 anos, a variável deve receber o valor 'sim';
- Caso contrário deve receber o valor 'não';
- A variável alistamento deve receber esses valores no formado JSON; A chave se chama 'alistamento'.
- Utilizar let na declaração das variáveis
*/

const express = require('express');
const app = express();

let idade = 17;
let alistamento;


if (idade == 17){
    alistamento = {alistamento: 'sim'};
}

else{
    alistamento = {alistamento: 'nao'};
}

app.get('/' , (req, res)  => {
    res.json(alistamento);
});

app.listen(8080, () => {
   console.log("Servidor iniciado");
});