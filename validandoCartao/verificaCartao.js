function validaCartao(numeroCartao){
    let cartaoValido = numeroCartao.length == 12 ? true : false;
    return cartaoValido;
}

exports.validaCartao = validaCartao;