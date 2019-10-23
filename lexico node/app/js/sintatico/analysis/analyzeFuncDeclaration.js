const tokenModel = require('../../../../models/Token');
const analyzeBlock = require('./analyzeBlock');
const analyzeCommands = require('../analysis/analyzeCommands');
const analyzeSubRotine = require('./analyzeSubRotine');
const analyzeStepVariables = require('./analyzeStepVariables');
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) =>
{
    lexic = Lexic;
   token = lexic.doLexic()
   //var nivel = 'L'

   if( token.symbol === 'sidentificador')
   {
       //if(!pesquisa(tabela))
       //{
            //insere(tabela,nivel)
            token = lexic.doLexic()
            if( token.symbol === 'sdoispontos')
            {
                token = lexic.doLexic()
                if(token.symbol === 'sinteiro' || token.symbol === 'sbooleano')
                {
                    if(token.symbol === 'sinteiro')
                    {
                        //poe tipo na tabela
                    }
                    else
                    {
                        //poe tipo na tabela
                    }
                    token = lexic.doLexic()
                    if(token.symbol === 'sponto_virgula')
                    {
                        //retirar gambiarra
                        //token =  analyzeBlock(token)
                        token = lexic.doLexic()
                        token = analyzeStepVariables(token)
                        //token = analyzeSubRotine(token)
                        //retirar gambiarra enorme
                        if (token.symbol === 'sprocedimento' || token.symbol === 'sfuncao') {
                            //codigo vermelho
                            while (token.symbol === 'sprocedimento' || token.symbol === 'sfuncao') {
                                if (token.symbol === 'sprocedimento') {
                                    token = analyzeProcDeclaration(token)
                    
                                }
                                else {
                                    token = analyzeFuncDeclaration(token)
                                }
                                if (token.symbol === 'sponto_virgula') {
                                    token = lexic.doLexic()
                                }
                                else {
                                    throw "Esperava ;"
                                }
                            }
                        }
                        token = analyzeCommands(token)
                    }
                }
                else
                {
                   throw "error"
                }

            }
            else
            {
               throw "error"
            }

       //}
       //else
       //{
           //error
       //}
       //desempilha(tabela)
   }

   return token
   
}
