const tokenModel = require('../../../../models/Token');
const analyzeBlock = require('./analyzeBlock');
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) => {
    lexic = Lexic.getInstance();
    token = lexic.doLexic()
    //var nivel = 'L'

    if (token.simbolo === 'sidentificador') {
        //if (!pesquisa(tabela)) {
            insere(tabela, nivel)
            token = lexic.doLexic()

            token = lexic.doLexic()
            if (token.simbolo === 'sponto_virgula') {
                analyzeBlock(token)
            }
            else
            {
                //error
            }
        //}
        //else {
            //error
        //}
        //desempilha(tabela)
    }

}
