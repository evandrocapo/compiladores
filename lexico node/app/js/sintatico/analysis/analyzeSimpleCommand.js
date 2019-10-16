const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (token) =>
{
   switch(token.simbolo)
   {
       case 'sidentificador':
           analyzeAtribCallProc()
           break;
        case 'sse':
            analyzeIf()
            break;
        case 'senquanto':
            analyzeWhile()
            break;
        case 'sleia':
            analyzeRead()
            break;
        case 'sescreva':
            analyzeWrite()
            break;
        default:
            analyzeCommands()
            break;
   }
   
}
