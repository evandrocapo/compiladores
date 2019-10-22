const tokenModel = require('../../../../models/Token');
const analyzeExpression = require('./analyzeExpression')
const analyzeSimpleCommand = require('./analyzeSimpleCommand')
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) =>
{
    lexic = Lexic.getInstance();
   token = lexic.doLexic()
   analyzeExpression(token)
   if(token.simbolo === 'sfaca')
   {
        token = lexic.doLexic() 
        analyzeSimpleCommand(token)
   }
   else
   {
       //error
   }
   
}
