const treatsReservedWord = require('./treatsReservedWord')
const tokenModel = require('../../../../models/Token');

module.exports = (character,program, linha) =>
{
    var token = new tokenModel.Token(null,null,null);
    var id = character;

    character = read(program);

    while(character && character.match(/^[A-Za-z]+$/) || character === '_')
    {
       id = id + character;
       character = read(program)
    }

    token.setLexem(id);
    token.setLine(linha)
    token = treatsReservedWord(id,token);

    return {'token': token, 'program': program, 'character': character};
}

function read(character){
    return character.shift();
}