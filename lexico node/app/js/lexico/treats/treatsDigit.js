const tokenModel = require("../../../../models/Token");

//Imports
module.exports = (num,program, linha) =>
{
    var token = new tokenModel.Token(null,null,null);

    var character = read(program);

    while(character && character.match(/\d+/g))
    {
        num = num + character;
        character = read(program);
    }

    token.setSymbol('snumero');
    token.setLexem(num);
    token.setLine(linha)

    return {'token': token, 'program': program, 'character': character};
}

function read(character){
    return character.shift();
}