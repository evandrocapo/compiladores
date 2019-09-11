export const treatsAssignment = (caracter) =>
{
    var assignment = caracter;
    var token = 
    {
        símbolo:'',
        lexema:''
    }
    read(caracter);

    if(caracter === '=')
    {
        assignment = assignment + caracter;
        read(caracter);
        token.símbolo = 'satribuiçao';
    }
    else
    {
        token.símbolo = 'sdoispontos';
    }
    token.lexema = assignment;

    return token;
}