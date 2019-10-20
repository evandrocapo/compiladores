const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (token) =>
{
   if(token.simbolo === 'smais' || token.simbolo === 'smenos')
   {
       token = this.lexic.doLexic()
       analyzeTerm()
       while(token.simbolo === 'smais' || token.simbolo === 'smenos' || token.simbolo === 'sou')
       {
        token = this.lexic.doLexic()
        analyzeTerm()
       }
   }
   
}
