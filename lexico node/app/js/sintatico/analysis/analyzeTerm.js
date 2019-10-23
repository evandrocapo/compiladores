const tokenModel = require('../../../../models/Token');
const analyzeFactor = require('./analyzeFactor')
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) =>
{
    lexic = Lexic;
    token = analyzeFactor(token)

    while(token.symbol === 'smult' || token.symbol === 'sdiv' || token.symbol === 'se')
    {
        token = lexic.doLexic()
        token = analyzeFactor(token)
    }
   return token
}
