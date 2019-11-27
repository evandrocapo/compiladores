const tokenModel = require('../../../../models/Token');
const analyzeCallFunc = require('./analyzeCallFunc');
const analyzeExpression = require('./analyzeExpression');
const analyzeFactor = require('./analyzeFactor2');
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
    else if (token.symbol === 'sabre_parenteses')
    {
        token = lexic.doLexic()
        //retirar gambiarra
        //token = analyzeExpression(token)
        //token = analyzeSimpleExpression(token)
        if(token.symbol === 'smais' || token.symbol === 'smenos')
        {
            token = lexic.doLexic()
         }
            //token = analyzeTerm(token)
            token = analyzeFactor(token)

            while(token.symbol === 'smult' || token.symbol === 'sdiv' || token.symbol === 'se')
            {
                token = lexic.doLexic()
                token = analyzeFactor(token)
            }
            while(token.symbol === 'smais' || token.symbol === 'smenos' || token.symbol === 'sou')
            {
             token = lexic.doLexic()
             //token = analyzeTerm(token)
             token = analyzeFactor(token)

             while(token.symbol === 'smult' || token.symbol === 'sdiv' || token.symbol === 'se')
             {
                 token = lexic.doLexic()
                 token = analyzeFactor(token)
             }
            }
        if(token.symbol === 'smaior' || token.symbol === 'sig' || token.symbol === 'smenor' || token.symbol === 'smenorig' || token.symbol === 'sdif' || token.symbol === 'smaiorig' )
        {
             lexic = Lexic;
             token = lexic.doLexic()
             //token = analyzeSimpleExpression(token)
             if(token.symbol === 'smais' || token.symbol === 'smenos')
             {
                 token = lexic.doLexic()
              }
                 //token = analyzeTerm(token)
                 token = analyzeFactor(token)

                 while(token.symbol === 'smult' || token.symbol === 'sdiv' || token.symbol === 'se')
                 {
                     token = lexic.doLexic()
                     token = analyzeFactor(token)
                 }
                 while(token.symbol === 'smais' || token.symbol === 'smenos' || token.symbol === 'sou')
                 {
                  token = lexic.doLexic()
                  //token = analyzeTerm(token)
                  token = analyzeFactor(token)

                  while(token.symbol === 'smult' || token.symbol === 'sdiv' || token.symbol === 'se')
                  {
                      token = lexic.doLexic()
                      token = analyzeFactor(token)
                  }
                 }
          
        }
        //
        if(token.symbol === 'sfecha_parenteses')
        {
            token = lexic.doLexic()
        }
        else
        {
           'Erro -> Esperava fecha parenteses'
        }
    }
    else if (token.lexem === 'verdadeiro' || token.lexem === 'falso')
    {
        token = lexic.doLexic()
    }
    else
    {
       throw "Erro -> Esperava um fator"
    }

    return token
   
}
