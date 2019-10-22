const tokenModel = require('../../../../models/Token');
const Lexic = require('../models/Lexic');

//Imports
module.exports = (token) =>
{
    lexic = Lexic.getInstance();
    token = lexic.doLexic()
    if(token.simbolo === 'sidentificador')
    {
         //inserir na tabela
    }
    else
    {
        //error
    }
}
