const tokenModel = require('../../../../models/Token');
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) =>
{
    lexic = Lexic.getInstance();
    token = lexic.doLexic()
    if (token.simbolo === 'sabre_parenteses') {
        token = lexic.doLexic()
        if (token.simbolo === 'sidentificador') {
            //if (pesquisa(tabela)) {
                token = lexic.doLexic()
                if (token.simbolo === 'sfecha_parenteses') {
                    token = lexic.doLexic()
                }
                else {
                    //error
                }
            //}
           // else {
                //error
            //}
        } else {
            //error
        }
    }
    else {
        //error
    }

   
}
