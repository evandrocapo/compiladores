const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (caracter,program, linha) =>
{
    var punctuation = caracter;
    var token = new tokenModel.Token();
    
    switch(punctuation)
    {
        case ';':
            token.setSymbol('sponto_virgula');
        break;
        case ',':
            token.setSymbol('svirgula');
        break;
        case '(':
            token.setSymbol('sabre_parenteses');
        break;
        case ')':
            token.setSymbol('sfecha_parenteses');
        break;
        case '.':
            token.setSymbol('sponto');
        break;
        default:
        //Erro
        break;
    }
    token.setLexem(punctuation);
    token.setLine(linha)
    character = read(program)

    return {'token': token, 'program': program, 'character': character};
}

function read(character){
    return character.shift();
}