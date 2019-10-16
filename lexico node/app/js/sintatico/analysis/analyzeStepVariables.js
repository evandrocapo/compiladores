const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (token) =>
{
   if(token.simbolo === 'svar')
   {
       token = lexic(token)
       if(token.simbolo === ' sidentificador')
       {
           while (token.simbolo === ' sidentificador')
           {
                analyzeVariables()
                if(token.simbolo === 'spontovirg')
                {
                    token = lexic(token)
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
