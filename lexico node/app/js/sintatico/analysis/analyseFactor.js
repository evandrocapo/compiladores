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
                token = lexic(token)
            }
        }
        else
        {
            //error
        }
    }
    else if(token.simbolo ===  'snumero')
    {
        token = lexic(token)
    }
    else if (token.simbolo === 'snao')
    {
        token = lexic(token)
        analyzeFactor()
    }
    else if (token.simbolo === ' sabre_parenteses')
    {
        token = lexic(token)
        analyzeExpression()
        if(token.simbolo === 'sfecha_parenteses')
        {
            token = lexic(token)
        }
        else
        {
            //error
        }
    }
    else if (token.lexema === 'verdadeiro' || token.lexema === 'falso')
    {
        token = lexic(token)
    }
    else
    {
        //error
    }
   
}
