const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (token) =>
{
   if(token.simbolo === 'sinicio')
   {
        token = lexic(token)
        analyzeSimpleCommand()
        while(token.simbolo !== 'sfim')
        {
            if(token.simbolo === 'spontovirgula')
            {
                token = lexic(token)
                if(token.simbolo !== 'sfim')
                {
                    analyzeSimpleCommand()
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
            token = lexic(token)
        }
   }
   else
   {
       //error
   }
   
}
