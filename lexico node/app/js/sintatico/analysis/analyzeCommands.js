const tokenModel = require('../../../../models/Token');
const analyzeSimpleCommand = require('../app/js/sintatico/analysis/analyzeSimpleCommand');
const Lexic = require('../models/Lexic');


//Imports
module.exports = (token) =>
{
    lexic = Lexic.getInstance();
   if(token.simbolo === 'sinicio')
   {
        token = lexic.doLexic()
        analyzeSimpleCommand(token)
        while(token.simbolo !== 'sfim')
        {
            if(token.simbolo === 'spontovirgula')
            {
                token = lexic.doLexic()
                if(token.simbolo !== 'sfim')
                {
                    analyzeSimpleCommand(token)
                }
                else
                {
                    //error
                }
            }
            else
            {
                //error
            }
            token = lexic.doLexic()
        }
   }
   else
   {
       //error
   }
   
}
