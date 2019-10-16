const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (token) =>
{
    analyzeFactor()

    while(token.simbolo === 'smult' || token.simbolo === 'sdiv' || token.simbolo === 'se')
    {
        token = lexic(token)
        analyzeFactor()
    }
   
}
