const tokenModel = require('../../../../models/Token');
const analyzeTerm = require('./analyzeTerm')
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) =>
{
    lexic = Lexic.getInstance();
   if(token.simbolo === 'smais' || token.simbolo === 'smenos')
   {
       token = lexic.doLexic()
       analyzeTerm(token)
       while(token.simbolo === 'smais' || token.simbolo === 'smenos' || token.simbolo === 'sou')
       {
        token = lexic.doLexic()
        analyzeTerm(token)
       }
   }
   
}
