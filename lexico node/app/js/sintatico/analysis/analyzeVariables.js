const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (token) => {
    do {
        if (token.simbolo === 'sidentificador') {
            pesquisa(tabela)
            if (!tabela.duplicidade) {
                tabela = insere(tabela)
                token = lexic(token)
                if (token.simbolo === 'svírgula' || token.simbolo === 'sdoispontos') {
                    if (token.simbolo === 'svirgula') {
                        token = lexic(token)
                        if (token.simbolo === 'sdoispontos') {
                            //error
                        }
                    }
                    else {
                        //error
                    }
                }
                else {
                    //error
                }
            }
            else {
                //error
            }
        }
        else {
            //error
        }
    }
    while (token.simbolo === 'sdoispontos')
    token = lexic(token)
    analyzeType()
}
