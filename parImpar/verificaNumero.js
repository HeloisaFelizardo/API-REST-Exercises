function parImpar(numero)
{
    let resultado = '';

    if(numero % 2 == 0)
    {
        resultado = 'par';
    }
    else
    {
        resultado = 'ímpar';
    }

  return resultado;

}

exports.parImpar = parImpar;