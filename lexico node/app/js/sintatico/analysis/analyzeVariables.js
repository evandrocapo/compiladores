const tokenModel = require('../../../../models/Token');
const Lexic = require('../models/Lexic');
const analyzeType = require('./analyzeType')

//Imports
module.exports = (token) => {
    lexic = Lexic.getInstance();
    do {
        if (token.simbolo === 'sidentificador') {
           // pesquisa(tabela)
            //if (!tabela.duplicidade) {
                //tabela = insere(tabela)
                token = lexic.doLexic()
                if (token.simbolo === 'svírgula' || token.simbolo === 'sdoispontos') {
                    if (token.simbolo === 'svirgula') {
                        token = lexic.doLexic()
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
            //}
            //else {
                //error
           // }
        }
        else {
            //error
        }
    }
    while (token.simbolo === 'sdoispontos')
    token = lexic.doLexic()
    analyzeType(token)
}
