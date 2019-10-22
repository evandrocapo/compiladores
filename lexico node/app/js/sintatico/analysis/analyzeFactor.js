const tokenModel = require('../../../../models/Token');
const analyzeCallFunc = require('./analyzeCallFunc');
const analyzeFactor = require('./analyzeFactor');
const analyzeExpression = require('./analyzeExpression');
const Lexic = require('../../../../models/Lexic');


//Imports
module.exports = (token) =>
{
    lexic = Lexic.getInstance();
    if(token.simbolo === 'sidentificador')
    {
        //if(pesquisa(tabela))
        //{
            // if(tabela.simbolo === 'função inteiro' || tabela.simbolo === 'função inteiro')
            // {
                analyzeCallFunc(token)
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
    else if(token.simbolo ===  'snumero')
    {
        token = lexic.doLexic()
    }
    else if (token.simbolo === 'snao')
    {
        token = lexic.doLexic()
        analyzeFactor(token)
    }
    else if (token.simbolo === ' sabre_parenteses')
    {
        token = this.lexic.doLexic()
        analyzeExpression(token)
        if(token.simbolo === 'sfecha_parenteses')
        {
            token = lexic.doLexic()
        }
        else
        {
            //error
        }
    }
    else if (token.lexema === 'verdadeiro' || token.lexema === 'falso')
    {
        token = lexic.doLexic()
    }
    else
    {
        //error
    }
   
}
