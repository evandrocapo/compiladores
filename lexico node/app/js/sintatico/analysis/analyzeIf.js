const tokenModel = require('../../../../models/Token');
const analyzeSimpleCommand = require('../app/js/sintatico/analysis/analyzeSimpleCommand');
const analyzeExpression = require('../app/js/sintatico/analysis/analyzeExpression');
const Lexic = require('../models/Lexic');

//Imports
module.exports = (token) =>
{
    lexic = Lexic.getInstance();
   token = lexic.doLexic()
   analyzeExpression(token)
   if (token.simbolo === 'sentao')
   {
       token = lexic.doLexic()
       analyzeSimpleCommand(token)
       if(token.simbolo === 'ssenao')
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
