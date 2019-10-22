const tokenModel = require('../../../../models/Token');
const analyzeCommands = require('../analysis/analyzeCommands');
const analyzeSubRotine = require('./analyzeSubRotine');
const analyzeStepVariables = require('./analyzeStepVariables');
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) =>
{
   lexic = Lexic.getInstance();
   token = lexic.doLexic()
   analyzeStepVariables(token)
   analyzeSubRotine(token)
   analyzeCommands(token)
}