const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (token) => {
    token = lexic(token)
    var nivel = 'L'

    if (token.simbolo === 'sidentificador') {
        if (!pesquisa(tabela)) {
            insere(tabela, nivel)
            token = lexic(token)

            token = lexic(token)
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
