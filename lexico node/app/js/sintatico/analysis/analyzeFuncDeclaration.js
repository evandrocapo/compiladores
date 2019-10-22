const tokenModel = require('../../../../models/Token');
const Lexic = require('../models/Lexic');
const analyzeBlock = require('../app/js/sintatico/analysis/analyzeBlock');
const Lexic = require('../models/Lexic');

//Imports
module.exports = (token) =>
{
    lexic = Lexic.getInstance();
   token = lexic.doLexic()
   //var nivel = 'L'

   if( token.simbolo === 'sidentificador')
   {
       //if(!pesquisa(tabela))
       //{
            //insere(tabela,nivel)
            token = lexic.doLexic()
            if( token.simbolo === 'sdoispontos')
            {
                token = lexic.doLexic()
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
                    token = lexic.doLexic()
                    if(token.simbolo === 'sponto_virgula')
                    {
                        analyzeBlock(token)
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
