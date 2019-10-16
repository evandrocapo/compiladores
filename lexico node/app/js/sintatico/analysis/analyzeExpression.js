const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (token) =>
{
   if(token.simbolo === 'smaior' || token.simbolo === 'sig' || token.simbolo === 'smenor' || token.simbolo === 'smenorig' || token.simbolo === 'sdif' || token.simbolo === 'smaiorig' )
   {
       token = lexic(token)
       analyzeSimpleExpression()
   }
   
}
