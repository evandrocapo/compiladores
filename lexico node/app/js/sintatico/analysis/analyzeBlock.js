const tokenModel = require('../../../../models/Token');
const analyzeCommands = require('../analysis/analyzeCommands');
const analyzeSubRotine = require('../app/js/sintatico/analysis/analyzeSubRotine');
const analyzeStepVariables = require('../app/js/sintatico/analysis/analyzeStepVariables');
const Lexic = require('../models/Lexic');

//Imports
module.exports = (token) =>
{
   lexic = Lexic.getInstance();
   token = lexic.doLexic()
   analyzeStepVariables(token)
   analyzeSubRotine(token)
   analyzeCommands(token)
}