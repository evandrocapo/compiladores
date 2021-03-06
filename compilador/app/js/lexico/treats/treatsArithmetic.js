const tokenModel = require('../../../../models/Token');
const Error = require('../../../../models/Error');

//Imports
module.exports = (character, program, linha) =>
{
    var arithmetic = character;
    var token = new tokenModel.Token();

    switch(arithmetic)
    {
        case '+':
            token.setSymbol('smais');
        break;
        case '-':
            token.setSymbol('smenos');
        break;
        case '*':
            token.setSymbol('smult');
        break;
        default:
            throw new Error.Error("Erro no treatsArithmetic",linha); 
        break;
    }
    character = read(program);
    token.setLexem(arithmetic);
    token.setLine(linha)

    return {'token': token, 'program': program, 'character': character};
}

function read(character){
    return character.shift();
}