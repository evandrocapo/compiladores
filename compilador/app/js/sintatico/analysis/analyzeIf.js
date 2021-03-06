const tokenModel = require('../../../../models/Token');
const analyzeSimpleCommand = require('./analyzeSimpleCommand');
const analyzeExpression = require('./analyzeExpression');
const Lexic = require('../../../../models/Lexic');



const analyzeAtribCallProc = require('./analyzeAtribCallProc')
const analyzeIf = require('./analyzeIf')
const analyzeWhile = require('./analyzeWhile')
const analyzeRead = require('./analyzeRead')
const analyzeWrite = require('./analyzeWrite')
const analyzeCommands = require('./analyzeCommands')

//Imports
module.exports = (token) =>
{
    lexic = Lexic;
   token = lexic.doLexic()
   token = analyzeExpression(token)
   if (token.symbol === 'sentao')
   {
       token = lexic.doLexic()
       //retirar gambiarra
       //token = analyzeSimpleCommand(token)

       if(token.symbol === 'sidentificador'){
        token =  analyzeAtribCallProc(token)
       }
       else{
            if(token.symbol === 'sse') {
                token = analyzeIf(token)
            }      
            else{
                if(token.symbol === 'senquanto'){
                    token = analyzeWhile(token)
                }
                else{
                    if(token.symbol === 'sleia'){
                        token = analyzeRead(token)
                    }
                    else{
                        if(token.symbol === 'sescreva'){
                            token = analyzeWrite(token)
                        }
                        else{
                            token = analyzeCommands(token)
                        }
                    }
                }
            }
       }

       if(token.symbol === 'ssenao')
       {
        token = lexic.doLexic()
        //retirar gambiarra
        //token = analyzeSimpleCommand(token)
        if(token.symbol === 'sidentificador'){
            token =  analyzeAtribCallProc(token)
           }
           else{
                if(token.symbol === 'sse') {
                    token = analyzeIf(token)
                }      
                else{
                    if(token.symbol === 'senquanto'){
                        token = analyzeWhile(token)
                    }
                    else{
                        if(token.symbol === 'sleia'){
                            token = analyzeRead(token)
                        }
                        else{
                            if(token.symbol === 'sescreva'){
                                token = analyzeWrite(token)
                            }
                            else{
                                token = analyzeCommands(token)
                            }
                        }
                    }
                }
           }

       }
   }
   else
   {
       throw 'Erro -> Esperava então'
   }
   return token
}
