const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (token) =>
{
   token = this.lexic.doLexic()
   analyzeExpression()
   if (token.simbolo === 'sentao')
   {
       token = this.lexic.doLexic()
       analyzeSimpleCommand()
       if(token.simbolo === 'ssenao')
       {
        token = this.lexic.doLexic()
        analyzeSimpleCommand()
       }
   }
   else
   {
       //error
   }
   
}
