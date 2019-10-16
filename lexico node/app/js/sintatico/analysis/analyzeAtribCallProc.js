const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (token) =>
{
   token = lexic(token)
   if(token.simbolo === 'satribuicao')
   {
       analyzeAssignment()
   }
   else
   {
       analyseCallProc()
   }
   
}
