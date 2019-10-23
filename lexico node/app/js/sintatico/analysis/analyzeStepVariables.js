const tokenModel = require('../../../../models/Token');
const analyzeVariables = require('./analyzeVariables')
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) =>
{
    lexic = Lexic;
   if(token.symbol === 'svar')
   {
       token = lexic.doLexic()
       if(token.symbol === 'sidentificador')
       {
           while (token.symbol === 'sidentificador')
           {
                token = analyzeVariables(token)
                console.log('cansei')
                console.log(token)
                if(token.symbol === 'sponto_virgula')
                {
                    token = lexic.doLexic()
                }
                else
                {
                    throw "error"
                }
                
           }
       }
       else
       {
        throw "error"
       }
   }
   
}
