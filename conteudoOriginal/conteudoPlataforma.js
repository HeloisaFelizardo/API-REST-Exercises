function retornaConteudoOriginal(plataforma)
{
 let conteudoOriginal;

 switch(plataforma)
 {
  case 'netflix':
   conteudoOriginal = 'Stranger Things';
   break;
  case 'amazon':
   conteudoOriginal = 'The Boys';
   break;
  case 'disney':
   conteudoOriginal = 'Wandavision';
   break;
  }

  return conteudoOriginal;
}

exports.retornaConteudoOriginal = retornaConteudoOriginal;