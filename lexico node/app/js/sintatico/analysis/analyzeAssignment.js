const tokenModel = require('../../../../models/Token');
const analyzeExpression = require('../app/js/sintatico/analysis/analyzeExpression');
const Lexic = require('../models/Lexic');

//Imports
module.exports = (token) => {
    lexic = Lexic.getInstance();
    token = lexic.doLexic()
    analyseExpression(token)
}
