const tokenModel = require("../../../../models/Token");

//Imports
module.exports = (num,program) =>
{
    var token = new tokenModel.Token(null,null,null);

    // if(program.length <= 0){
        // token.setSymbol('snúmero');
        // token.setLexem(num);
        // return {'token': token, 'program': program};
    // }

    var character = read(program);

    while(character && character.match(/\d+/g))
    {
        num = num + character;
        character = read(program);
    }

    token.setSymbol('snumero');
    token.setLexem(num);

    return {'token': token, 'program': program};
}

function read(character){
    return character.shift();
}