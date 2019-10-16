const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (token) =>
{
   token = lexic(token)
   analyzeStepVariables()
   analyzeSubRotine()
   analyzeCommand()
   
}
