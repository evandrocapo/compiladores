const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (token) =>
{
    if (token.simbolo === 'sprocedimento' || token.simbolo === 'sfuncao') {
        //codigo vermelho
        while (token.simbolo === 'sprocedimento' || token.simbolo === 'sfuncao') {
            if (token.simbolo === 'sprocedimento') {
                analyzeProcDeclaration()

            }
            else {
                analyzeFuncDeclaration()
            }
            if (token.simbolo === 'spontovirgula') {
                token = this.lexic.doLexic()
            }
            else {
                //error
            }
        }
    }
   
}
