const tokenModel = require('../../../../models/Token');
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) =>
{
    lexic = Lexic;
   if(token.symbol !== 'sinteiro' && token.symbol !== 'sbooleano')
   {
    throw "Erro -> Esperava tipos"
   }
   else
   {
       //tabela = inserir(tabela)
       return token = lexic.doLexic()
   }
   
}
