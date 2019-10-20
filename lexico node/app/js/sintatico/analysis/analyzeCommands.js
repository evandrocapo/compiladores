const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (token) =>
{
   if(token.simbolo === 'sinicio')
   {
        token = this.lexic.doLexic()
        analyzeSimpleCommand()
        while(token.simbolo !== 'sfim')
        {
            if(token.simbolo === 'spontovirgula')
            {
                token = this.lexic.doLexic()
                if(token.simbolo !== 'sfim')
                {
                    analyzeSimpleCommand()
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
            token = this.lexic.doLexic()
        }
   }
   else
   {
       //error
   }
   
}
