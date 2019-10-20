const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (token) => {
    token = this.lexic.doLexic()
    var nivel = 'L'

    if (token.simbolo === 'sidentificador') {
        if (!pesquisa(tabela)) {
            insere(tabela, nivel)
            token = this.lexic.doLexic()

            token = this.lexic.doLexic()
            if (token.simbolo === 'sponto_virgula') {
                analyzeBlock()
            }
            else
            {
                //error
            }
        }
        else {
            //error
        }
        desempilha(tabela)
    }

}
