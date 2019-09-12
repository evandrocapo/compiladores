import treatsReservedWord from './treatsReservedWord'

export const treatsIdentificator = (caracter) =>
{
    var id = caracter;
    var token = 
    {
        símbolo:'',
        lexema:''
    }
    read(caracter);

    while(caracter.value.match("/^[A-Za-z]+$/") || caracter === '_')
    {
       id = id + caracter;
       read(caracter); 
    }
    token.lexema = id;
    treatsReservedWord(id,token);

    return token;
}