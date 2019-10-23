const tokenModel = require('../../../../models/Token');
const analyzeAtribCallProc = require('./analyzeAtribCallProc')
const analyzeIf = require('./analyzeIf')
const analyzeWhile = require('./analyzeWhile')
const analyzeRead = require('./analyzeRead')
const analyzeWrite = require('./analyzeWrite')
const analyzeCommands = require('./analyzeCommands')
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) =>
{
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
            token =  analyzeCommands(token)
            break;
   }

   return token
}
