import Token from "../token/Token";

//Imports
export const treatsRelational = (caracter) =>
{
    var relational = caracter;
    var token = new Token();
    //read(caracter);

    if(caracter === '>' || caracter === '<')
    {
        read(caracter);
        if(caracter === '=')
        {
            if(relational ==='>')
            {
                token.setSymbol('smaiorig');
            }
            else if (relational ==='<')
            {
                token.setSymbol('smenorig');
            }
            relational = relational + caracter;  
            read(caracter);
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
    else if(caracter === '=')
    {
        token.setSymbol('sig');
        read(caracter);
    }
    else if(caracter === '!')
    {
        read(caracter);
        if(caracter === '=')
        {
            token.setSymbol('sdif');
            relational = relational + caracter; 
            read(caracter);
        }
        else
        {
            //erro
        }
    }
    
    token.setLexem(relational);

    return token;
}