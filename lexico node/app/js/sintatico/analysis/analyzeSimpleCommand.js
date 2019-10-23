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
           analyzeAtribCallProc(token)
           break;
        case 'sse':
            analyzeIf(token)
            break;
        case 'senquanto':
            analyzeWhile(token)
            break;
        case 'sleia':
            analyzeRead(token)
            break;
        case 'sescreva':
            analyzeWrite(token)
            break;
        default:
            analyzeCommands(token)
            break;
   }
   
}
