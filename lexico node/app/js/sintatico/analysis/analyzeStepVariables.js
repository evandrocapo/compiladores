const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (token) =>
{
   if(token.simbolo === 'svar')
   {
       token = this.lexic.doLexic()
       if(token.simbolo === ' sidentificador')
       {
           while (token.simbolo === ' sidentificador')
           {
                analyzeVariables()
                if(token.simbolo === 'spontovirg')
                {
                    token = this.lexic.doLexic()
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
