const tokenModel = require('../../../../models/Token');
const analyzeSimpleCommand = require('./analyzeSimpleCommand');
const analyzeExpression = require('./analyzeExpression');
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) =>
{
    lexic = Lexic;
   token = lexic.doLexic()
   analyzeExpression(token)
   if (token.symbol === 'sentao')
   {
       token = lexic.doLexic()
       analyzeSimpleCommand(token)
       if(token.symbol === 'ssenao')
       {
        token = lexic.doLexic()
        analyzeSimpleCommand(token)
       }
   }
   else
   {
       //error
   }
   
}
