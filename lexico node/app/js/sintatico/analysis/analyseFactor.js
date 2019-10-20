const tokenModel = require('../../../../models/Token');


//Imports
module.exports = (token) =>
{
    if(token.simbolo === 'sidentificador')
    {
        if(pesquisa(tabela))
        {
            if(tabela.simbolo === 'função inteiro' || tabela.simbolo === 'função inteiro')
            {
                analyzeCallFunc()
            }
            else
            {
                token = this.lexic.doLexic()
            }
        }
        else
        {
            //error
        }
    }
    else if(token.simbolo ===  'snumero')
    {
        token = this.lexic.doLexic()
    }
    else if (token.simbolo === 'snao')
    {
        token = this.lexic.doLexic()
        analyzeFactor()
    }
    else if (token.simbolo === ' sabre_parenteses')
    {
        token = this.lexic.doLexic()
        analyzeExpression()
        if(token.simbolo === 'sfecha_parenteses')
        {
            token = this.lexic.doLexic()
        }
        else
        {
            //error
        }
    }
    else if (token.lexema === 'verdadeiro' || token.lexema === 'falso')
    {
        token = this.lexic.doLexic()
    }
    else
    {
        //error
    }
   
}
