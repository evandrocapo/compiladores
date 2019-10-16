const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (token) =>
{
   token = lexic(token)
   analyzeExpression()
   if(token.simbolo === 'sfaca')
   {
        token = lexic(token) 
        analyzeSimpleCommand()
   }
   else
   {
       //error
   }
   
}
