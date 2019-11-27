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
                if (token.symbol === 'svirgula' || token.symbol === 'sdoispontos') {
                    if (token.symbol === 'svirgula') {
                        token = lexic.doLexic()
                        if (token.symbol === 'sdoispontos') {
                            throw "Erro -> : nao esperado"
                        }
                    }
                }
                else {
                    throw "Erro -> Esperava , ou :"
                }
            //}
            //else {
                //error
           // }
        }
        else {
            throw "Erro -> Esperava identificador"
        }
    }
    while (token.symbol !== 'sdoispontos')
    token = lexic.doLexic()
    return analyzeType(token)
}
