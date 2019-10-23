const tokenModel = require('../../../../models/Token');
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) =>
{
    lexic = Lexic;
   token = lexic.doLexic()
   if(token.symbol === 'sidentificador')
   {
        //inserir na tabela
   }
   else
   {
      throw "error"
   }
   
}
