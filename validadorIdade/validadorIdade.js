function verificaIdade(idade)
{
    let permitido = idade >= 16 ? true : false;
    return permitido;
}

exports.verificaIdade = verificaIdade;