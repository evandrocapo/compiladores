const tokenModel = require('../../../../models/Token');
const analyzeCommands = require('../analysis/analyzeCommands');
const analyzeSubRotine = require('./analyzeSubRotine');
const analyzeStepVariables = require('./analyzeStepVariables');
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) =>
{
   lexic = Lexic;
   token = lexic.doLexic()
   token = analyzeStepVariables(token)
   token = analyzeSubRotine(token)
   token = analyzeCommands(token)

   return token
}