const tokenModel = require('../../../../models/Token');
const analyzeProcDeclaration = require('./analyzeProcDeclaration')
const analyzeFuncDeclaration = require('./analyzeFuncDeclaration')
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) =>
{
    lexic = Lexic.getInstance();
    if (token.simbolo === 'sprocedimento' || token.simbolo === 'sfuncao') {
        //codigo vermelho
        while (token.simbolo === 'sprocedimento' || token.simbolo === 'sfuncao') {
            if (token.simbolo === 'sprocedimento') {
                analyzeProcDeclaration(token)

            }
            else {
                analyzeFuncDeclaration(token)
            }
            if (token.simbolo === 'spontovirgula') {
                token = lexic.doLexic()
            }
            else {
                //error
            }
        }
    }
   
}
