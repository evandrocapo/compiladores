//Imports
export const treatsRelational = (caracter) =>
{
    var relational = caracter;
    var token = 
    {
        símbolo:'',
        lexema:''
    }
    //read(caracter);

    if(caracter === '>' || caracter === '<')
    {
        read(caracter);
        if(caracter === '=')
        {
            if(relational ==='>')
            {
                token.símbolo = 'smaiorig';
            }
            else if (relational ==='<')
            {
                token.símbolo = 'smenorig';
            }
            relational = relational + caracter;  
            read(caracter);
        }
        else
        {
            if(relational === '>')
            {
                token.símbolo = 'smenor';
            }
            else if (relational === '<')
            {
                token.símbolo = 'smenor';
            }
        }
    }
    else if(caracter === '=')
    {
        token.símbolo = 'sig';
        read(caracter);
    }
    else if(caracter === '!')
    {
        read(caracter);
        if(caracter === '=')
        {
            token.símbolo = 'sdif';
            relational = relational + caracter; 
            read(caracter);
        }
        else
        {
            //erro
        }
    }
    
    token.lexema = relational;

    return token;
}