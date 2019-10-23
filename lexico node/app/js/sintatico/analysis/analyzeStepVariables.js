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
                analyzeVariables(token)
                if(token.symbol === 'spontovirg')
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
