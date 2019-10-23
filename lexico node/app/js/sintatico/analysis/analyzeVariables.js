const tokenModel = require('../../../../models/Token');
const Lexic = require('../../../../models/Lexic');
const analyzeType = require('./analyzeType')

//Imports
module.exports = (token) => {
    lexic = Lexic;
    do {
        if (token.symbol === 'sidentificador') {
           // pesquisa(tabela)
            //if (!tabela.duplicidade) {
                //tabela = insere(tabela)
                token = lexic.doLexic()
                if (token.symbol === 'svírgula' || token.symbol === 'sdoispontos') {
                    if (token.symbol === 'svirgula') {
                        token = lexic.doLexic()
                        if (token.symbol === 'sdoispontos') {
                            throw "error"
                        }
                    }
                    else {
                        throw "error"
                    }
                }
                else {
                    throw "error"
                }
            //}
            //else {
                //error
           // }
        }
        else {
            throw "error"
        }
    }
    while (token.symbol === 'sdoispontos')
    token = lexic.doLexic()
    analyzeType(token)
}
