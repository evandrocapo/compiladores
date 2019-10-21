const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (token) =>
{
   token = this.lexic.doLexic()
   //var nivel = 'L'

   if( token.simbolo === 'sidentificador')
   {
       //if(!pesquisa(tabela))
       //{
            //insere(tabela,nivel)
            token = this.lexic.doLexic()
            if( token.simbolo === 'sdoispontos')
            {
                token = this.lexic.doLexic()
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
                    token = this.lexic.doLexic()
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

       //}
       //else
       //{
           //error
       //}
       //desempilha(tabela)
   }
   
}
