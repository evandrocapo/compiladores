const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (token) =>
{
   if(token.simbolo === 'smais' || token.simbolo === 'smenos')
   {
       token = lexic(token)
       analyzeTerm()
       while(token.simbolo === 'smais' || token.simbolo === 'smenos' || token.simbolo === 'sou')
       {
        token = lexic(token)
        analyzeTerm()
       }
   }
   
}
