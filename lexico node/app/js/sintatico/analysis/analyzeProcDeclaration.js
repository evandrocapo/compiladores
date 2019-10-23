const tokenModel = require('../../../../models/Token');
const analyzeBlock = require('./analyzeBlock');
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) => {
    lexic = Lexic;
    token = lexic.doLexic()
    //var nivel = 'L'

    if (token.symbol === 'sidentificador') {
        //if (!pesquisa(tabela)) {
            //insere(tabela, nivel)
            token = lexic.doLexic()

            token = lexic.doLexic()
            if (token.symbol === 'sponto_virgula') {
                token = analyzeBlock(token)
            }
            else
            {
               throw "error"
            }
        //}
        //else {
            //error
        //}
        //desempilha(tabela)
    }
    
    return token

}
