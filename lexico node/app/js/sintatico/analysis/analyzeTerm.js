const tokenModel = require('../../../../models/Token');
const analyzeFactor = require('./analyzeFactor')
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) =>
{
    lexic = Lexic.getInstance();
    analyzeFactor(token)

    while(token.simbolo === 'smult' || token.simbolo === 'sdiv' || token.simbolo === 'se')
    {
        token = lexic.doLexic()
        analyzeFactor(token)
    }
   
}
