const tokenModel = require('../../../../models/Token');
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) =>
{
    lexic = Lexic;
    token = lexic.doLexic()
    if (token.symbol === 'sabre_parenteses') {
        token = lexic.doLexic()
        if (token.symbol === 'sidentificador') {
            //if (pesquisa(tabela)) {
                token = lexic.doLexic()
                if (token.symbol === 'sfecha_parenteses') {
                    token = lexic.doLexic()
                }
                else {
                    throw "error"
                }
            //}
           // else {
                //error
            //}
        } else {
            throw "error"
        }
    }
    else {
        throw "error"
    }

    return token
   
}
