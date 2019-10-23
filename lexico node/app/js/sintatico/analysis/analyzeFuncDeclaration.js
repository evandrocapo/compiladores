const tokenModel = require('../../../../models/Token');
const analyzeBlock = require('./analyzeBlock');
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) =>
{
    lexic = Lexic;
   token = lexic.doLexic()
   //var nivel = 'L'

   if( token.symbol === 'sidentificador')
   {
       //if(!pesquisa(tabela))
       //{
            //insere(tabela,nivel)
            token = lexic.doLexic()
            if( token.symbol === 'sdoispontos')
            {
                token = lexic.doLexic()
                if(token.symbol === 'sinteiro' || token.symbol === 'sbooleano')
                {
                    if(token.symbol === 'sinteiro')
                    {
                        //poe tipo na tabela
                    }
                    else
                    {
                        //poe tipo na tabela
                    }
                    token = lexic.doLexic()
                    if(token.symbol === 'sponto_virgula')
                    {
                        analyzeBlock(token)
                    }
                }
                else
                {
                   throw "error"
                }

            }
            else
            {
               throw "error"
            }

       //}
       //else
       //{
           //error
       //}
       //desempilha(tabela)
   }
   
}
