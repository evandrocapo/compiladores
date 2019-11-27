const tokenModel = require('../../../../models/Token');
const Error = require('../../../../models/Error');

//Imports
module.exports = (character,program,linha) =>
{
    var relational = character;
    var token = new tokenModel.Token();

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
                token.setSymbol('smaior');
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
            throw new Error.Error("Erro no treatsRelational",linha); 
        }
    }
    
    token.setLexem(relational);
    token.setLine(linha)
    

    return {'token': token, 'program': program, 'character': character};
}

function read(character){
    return character.shift();
}