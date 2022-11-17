/*
 Dias de trabalho
Observe o código da camada REST e selecione a alternativa com a camada de serviço correta:

- O código deve retornar para o front-end se o dia atual é dia de trabalho ou não;
- Os dias de trabalho são segunda, quarta e sexta;
- Os dias são baseados no Date() do JS.
*/

function retornaDiaTrabalho(){
    let data = new Date();
    let diaSemana = data.getDate();

    let trabalhaHoje;

    switch(diaSemana)
    {
        case 1:
        case 3:
        case 5:
            trabalhaHoje = true;
            break;
        default:
            trabalhaHoje = false;
            break;
    }

    return trabalhaHoje;
}

exports.retornaDiaTrabalho = retornaDiaTrabalho;