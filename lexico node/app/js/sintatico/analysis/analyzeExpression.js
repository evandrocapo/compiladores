const tokenModel = require('../../../../models/Token');
const analyzeSimpleExpression = require('../app/js/sintatico/analysis/analyzeSimpleExpression');
const Lexic = require('../models/Lexic');

//Imports
module.exports = (token) =>
{
   if(token.simbolo === 'smaior' || token.simbolo === 'sig' || token.simbolo === 'smenor' || token.simbolo === 'smenorig' || token.simbolo === 'sdif' || token.simbolo === 'smaiorig' )
   {
        lexic = Lexic.getInstance();
        token = lexic.doLexic()
       analyzeSimpleExpression()
   }
   
}
