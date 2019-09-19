import treatsReservedWord from './treatsReservedWord'
import Token from '../token/Token';

export const treatsIdentificator = (caracter) =>
{
    var id = caracter;
    var token = new Token();

    read(caracter);

    while(caracter.value.match("/^[A-Za-z]+$/") || caracter === '_')
    {
       id = id + caracter;
       read(caracter); 
    }
    token.setLexem(id);
    treatsReservedWord(id,token);

    return token;
}