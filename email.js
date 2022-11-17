const express = require('express');
const application = express();

let email = {email: 'johndoe@email.com'};

application.get('/', (req, res) => {
    res.json(email);
});

application.listen(8080, () => {
    console.log("Servidor iniciado");
});