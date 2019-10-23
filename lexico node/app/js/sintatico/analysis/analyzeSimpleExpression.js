const tokenModel = require('../../../../models/Token');
const analyzeTerm = require('./analyzeTerm')
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) =>
{
    lexic = Lexic;
   if(token.symbol === 'smais' || token.symbol === 'smenos')
   {
       token = lexic.doLexic()
    }
       token = analyzeTerm(token)
       while(token.symbol === 'smais' || token.symbol === 'smenos' || token.symbol === 'sou')
       {
        token = lexic.doLexic()
        token = analyzeTerm(token)
       }

   return token
   
}
