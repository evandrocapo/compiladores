const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (caracter) =>
{
    var punctuation = caracter;
    var token = new Token();
    
    switch(punctuation)
    {
        case ';':
            token.setSymbol('sponto_vírgula');
        break;
        case ',':
            token.setSymbol('svírgula');
        break;
        case '(':
            token.setSymbol('sabre_parênteses');
        break;
        case ')':
            token.setSymbol('sfecha_parênteses');
        break;
        case '.':
            token.setSymbol('sponto');
        break;
        default:
        //Erro
        break;
    }
    read(caracter);
    token.setLexem(punctuation);

    return token;
}