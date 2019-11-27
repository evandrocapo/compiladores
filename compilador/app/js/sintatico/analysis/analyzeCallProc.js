const tokenModel = require('../../../../models/Token');
const Lexic = require('../../../../models/Lexic');

//Imports
module.exports = (token) =>
{
    lexic = Lexic;
    
    
    if(token.symbol === 'sidentificador')
    {
         //inserir na tabela
    }
    else
    {
       throw "error"
    }
    token = lexic.doLexic()
    
    return token
}
