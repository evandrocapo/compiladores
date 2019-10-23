const tokenModel = require('../../../../models/Token');
const analyzeExpression = require('./analyzeExpression');
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) => {
    lexic = Lexic;
    token = lexic.doLexic()
    analyseExpression(token)
}
