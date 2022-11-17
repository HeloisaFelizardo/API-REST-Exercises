function validaTelefone(telefone){
    let valido = telefone.length == 15 ? true : false;
    return valido;
}

exports.validaTelefone = validaTelefone;