function escolheSerie(identificador)
{
    let serie;

    switch(identificador)
    {
        case '1':
            serie = "Smallville";
            break;
        case '2':
            serie = "Supergirl";
            break;
        case '3':
            serie = "Lois e Clark";
            break;
    }

    return serie;
}
exports.escolheSerie = escolheSerie;