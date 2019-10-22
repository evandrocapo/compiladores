const tokenModel = require('../../../../models/Token');
const analyzeAssignment = require('./analyzeAssignment');
const analyzeCallProc = require('./analyzeCallProc');
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) =>
{
     lexic = Lexic.getInstance();
   token = lexic.doLexic()
   if(token.simbolo === 'satribuicao')
   {
        analyzeAssignment(token)
   }
   else
   {
        analyzeCallProc(token)
   }
   
}
