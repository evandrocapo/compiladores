const tokenModel = require('../../../../models/Token');

module.exports = (character, program, linha) =>
{
    var assignment = character;
    var token = new tokenModel.Token();
    character = read(program);

    if(character === '=')
    {
        assignment = assignment + character;
        token.setSymbol('satribuiçao');
    }
    else
    {
        token.setSymbol('sdoispontos');
    }
    token.setLexem(assignment);
    token.setLine(linha)

    return {'token': token, 'program': program, 'character': character};
}

function read(character){
    return character.shift();
}