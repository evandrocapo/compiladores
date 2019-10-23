const tokenModel = require('../../../../models/Token');
const analyzeSimpleCommand = require('./analyzeSimpleCommand');
const Lexic = require('../../../../models/Lexic');


//Imports
module.exports = (token) =>
{
    lexic = Lexic;
   if(token.symbol === 'sinicio')
   {
        token = lexic.doLexic()
        token = analyzeSimpleCommand(token)
        while(token.symbol !== 'sfim')
        {
            if(token.symbol === 'sponto_virgula')
            {
                token = lexic.doLexic()
                if(token.symbol !== 'sfim')
                {
                    token = analyzeSimpleCommand(token)
                }
            }
            else
            {
               throw "Esperava ;"
            }
        }
        token = lexic.doLexic()
   }
   else
   {
      throw "Esperava inicio"
   }

   return token
   
}
