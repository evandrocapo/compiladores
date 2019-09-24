const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (character,program,linha) =>
{
    var relational = character;
    var token = new tokenModel.Token();
    character = read(program)

    if(character === '>' || character === '<')
    {
        character = read(program)
        if(character === '=')
        {
            if(relational ==='>')
            {
                token.setSymbol('smaiorig');
            }
            else if (relational ==='<')
            {
                token.setSymbol('smenorig');
            }
            relational = relational + character;  
            character = read(program)
        }
        else
        {
            if(relational === '>')
            {
                token.setSymbol('smenor');
            }
            else if (relational === '<')
            {
                token.setSymbol('smenor');
            }
        }
    }
    else if(character === '=')
    {
        token.setSymbol('sig');
        character = read(program)
    }
    else if(character === '!')
    {
        character = read(program)
        if(character === '=')
        {
            token.setSymbol('sdif');
            relational = relational + character; 
            character = read(program)
        }
        else
        {
            throw "Erro no treatsRelational"
        }
    }
    
    token.setLexem(relational);
    token.setLine(linha)
    

    return {'token': token, 'program': program, 'character': character};
}

function read(character){
    return character.shift();
}