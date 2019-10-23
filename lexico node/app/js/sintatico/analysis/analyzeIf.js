const tokenModel = require('../../../../models/Token');
const analyzeSimpleCommand = require('./analyzeSimpleCommand');
const analyzeExpression = require('./analyzeExpression');
const Lexic = require('../../../../models/Lexic');



const analyzeAtribCallProc = require('./analyzeAtribCallProc')
const analyzeIf = require('./analyzeIf')
const analyzeWhile = require('./analyzeWhile')
const analyzeRead = require('./analyzeRead')
const analyzeWrite = require('./analyzeWrite')
const analyzeCommands = require('./analyzeCommands')

//Imports
module.exports = (token) =>
{
    lexic = Lexic;
   token = lexic.doLexic()
   token = analyzeExpression(token)
   if (token.symbol === 'sentao')
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
                token = analyzeIf(token)
                console.log('sai')
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

       if(token.symbol === 'ssenao')
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
   }
   else
   {
       throw 'Esperava então'
   }
   return token
}
