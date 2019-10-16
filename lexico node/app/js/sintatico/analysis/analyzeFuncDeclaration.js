const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (token) =>
{
   token = lexic(token)
   var nivel = 'L'

   if( token.simbolo === 'sidentificador')
   {
       if(!pesquisa(tabela))
       {
            insere(tabela,nivel)
            token = lexic(token)
            if( token.simbolo === 'sdoispontos')
            {
                token = lexic(token)
                if(token.simbolo === 'sinteiro' || token.simbolo === 'sbooleano')
                {
                    if(token.simbolo === 'sinteiro')
                    {
                        //poe tipo na tabela
                    }
                    else
                    {
                        //poe tipo na tabela
                    }
                    token = lexic(token)
                    if(token.simbolo === 'sponto_virgula')
                    {
                        analyzeBlock()
                    }
                }
                else
                {
                    //error
                }

            }
            else
            {
                //error
            }

       }
       else
       {
           //error
       }
       desempilha(tabela)
   }
   
}
