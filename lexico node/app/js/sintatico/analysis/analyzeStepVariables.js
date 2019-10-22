const tokenModel = require('../../../../models/Token');
const analyzeVariables = require('./analyzeVariables')
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) =>
{
    lexic = Lexic.getInstance();
   if(token.simbolo === 'svar')
   {
       token = lexic.doLexic()
       if(token.simbolo === ' sidentificador')
       {
           while (token.simbolo === ' sidentificador')
           {
                analyzeVariables(token)
                if(token.simbolo === 'spontovirg')
                {
                    token = lexic.doLexic()
                }
                else
                {
                    //error
                }
                
           }
       }
       else
       {
           //error
       }
   }
   
}
