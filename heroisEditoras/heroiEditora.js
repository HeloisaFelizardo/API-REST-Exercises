/*
 Heróis e editoras
Complete o código abaixo corretamente de modo que a aplicação receba do front-end o nome de um herói e a API retorne o nome da editora deste herói:

- A estrutura condicional verifica três heróis: Superman, Hulk e Batman (nessa ordem);
- O parâmetro recebido do front-end se chama heroi.

*/

function retornaEditora(heroi){
    let editora = "";

    
    if (heroi == 'Superman'){
        editora = "DC";
    }
    else if (heroi == 'Hulk')
    {
        editora = "Marvel";
    }
    else if(heroi == 'Batman')
    {
        editora = "DC";
    }
    else
    {
        editora = "Não identificada";
    }

    return editora;
}
exports.retornaEditora = retornaEditora;