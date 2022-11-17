function retornaResultadoVotacao()
{
    let candidato_A = 55;
    let candidato_B = 45;

    let resultado = candidato_A > candidato_B ? 'candidato A venceu' : 'Candidato B venceu';

    return resultado;
}

exports.retornaResultadoVotacao = retornaResultadoVotacao;