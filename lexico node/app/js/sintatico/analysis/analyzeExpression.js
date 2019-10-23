const tokenModel = require('../../../../models/Token');
const analyzeSimpleExpression = require('./analyzeSimpleExpression');
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) =>
{
   if(token.symbol === 'smaior' || token.symbol === 'sig' || token.symbol === 'smenor' || token.symbol === 'smenorig' || token.symbol === 'sdif' || token.symbol === 'smaiorig' )
   {
        lexic = Lexic;
        token = lexic.doLexic()
       analyzeSimpleExpression()
   }
   
}
