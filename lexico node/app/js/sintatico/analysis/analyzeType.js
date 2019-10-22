const tokenModel = require('../../../../models/Token');
const Lexic = require('../models/Lexic');

//Imports
module.exports = (token) =>
{
    lexic = Lexic.getInstance();
   if(token.símbolo !== 'sinteiro' && token.símbolo !== 'sbooleano')
   {
       //error
   }
   else
   {
       //tabela = inserir(tabela)
       token = lexic.doLexic()
   }
   
}
