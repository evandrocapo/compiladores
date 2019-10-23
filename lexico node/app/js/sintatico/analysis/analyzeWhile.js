const tokenModel = require('../../../../models/Token');
const analyzeExpression = require('./analyzeExpression')
const analyzeSimpleCommand = require('./analyzeSimpleCommand')
const analyzeCommands = require('./analyzeCommands')
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) =>
{
    lexic = Lexic;
   token = lexic.doLexic()
   token = analyzeExpression(token)


   if(token.symbol === 'sfaca')
   {
        token = lexic.doLexic()
        //retirar gambiarra
        //token = analyzeSimpleCommand(token)
        switch(token.symbol)
   {
       case 'sidentificador':
        token =  analyzeAtribCallProc(token)
           break;
        case 'sse':
            token =  analyzeIf(token)
            break;
        case 'senquanto':
            token = analyzeWhile(token)
            break;
        case 'sleia':
            token = analyzeRead(token)
            break;
        case 'sescreva':
            token = analyzeWrite(token)
            break;
        default:
            token = analyzeCommands(token)
            break;
   }
   }
   else
   {
    throw "Erro -> esperava faca"
   }

   return token
   
}
