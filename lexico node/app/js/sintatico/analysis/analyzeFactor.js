const tokenModel = require('../../../../models/Token');
const analyzeCallFunc = require('./analyzeCallFunc');
const analyzeFactor = require('./analyzeFactor');
const analyzeExpression = require('./analyzeExpression');
const Lexic = require('../../../../models/Lexic');


//Imports
module.exports = (token) =>
{
    lexic = Lexic;
    if(token.symbol === 'sidentificador')
    {
        //if(pesquisa(tabela))
        //{
            // if(tabela.symbol === 'função inteiro' || tabela.symbol === 'função inteiro')
            // {
                token = analyzeCallFunc(token)
            // }
            // else
            // {
            //     token = this.lexic.doLexic()
            // }
        //}
        //else
        //{
            //error
        //}
    }
    else if(token.symbol ===  'snumero')
    {
        token = lexic.doLexic()
    }
    else if (token.symbol === 'snao')
    {
        token = lexic.doLexic()
        token = analyzeFactor(token)
    }
    else if (token.symbol === ' sabre_parenteses')
    {
        token = this.lexic.doLexic()
        token = analyzeExpression(token)
        if(token.symbol === 'sfecha_parenteses')
        {
            token = lexic.doLexic()
        }
        else
        {
           Lexic
        }
    }
    else if (token.lexem === 'verdadeiro' || token.lexem === 'falso')
    {
        token = lexic.doLexic()
    }
    else
    {
       Lexic
    }

    return token
   
}
