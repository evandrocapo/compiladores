const tokenModel = require('../../../../models/Token');
const analyzeProcDeclaration = require('./analyzeProcDeclaration')
const analyzeFuncDeclaration = require('./analyzeFuncDeclaration')
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) =>
{
    lexic = Lexic;
    if (token.symbol === 'sprocedimento' || token.symbol === 'sfuncao') {
        //codigo vermelho
        while (token.symbol === 'sprocedimento' || token.symbol === 'sfuncao') {
            if (token.symbol === 'sprocedimento') {
                token = analyzeProcDeclaration(token)

            }
            else {
                token = analyzeFuncDeclaration(token)
            }
            if (token.symbol === 'sponto_virgula') {
                token = lexic.doLexic()
            }
            else {
                throw "Esperava ;"
            }
        }
    }

    return token
   
}
