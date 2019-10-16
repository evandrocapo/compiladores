const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (token) =>
{
   token = lexic(token)
   analyzeExpression()
   if (token.simbolo === 'sentao')
   {
       token = lexic(token)
       analyzeSimpleCommand()
       if(token.simbolo === 'ssenao')
       {
        token = lexic(token)
        analyzeSimpleCommand()
       }
   }
   else
   {
       //error
   }
   
}
