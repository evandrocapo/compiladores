const tokenModel = require('../../../../models/Token');
const analyzeAssignment = require('../app/js/sintatico/analysis/analyzeAssignment');
const analyzeCallProc = require('../app/js/sintatico/analysis/analyzeCallProc');
const Lexic = require('../models/Lexic');

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
