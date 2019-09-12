//Imports
export const treatsDigit = (caracter) =>
{
    var num = caracter;
    var token = 
    {
        símbolo:'',
        lexema:''
    }
    read(caracter);

    while((Number.isInteger(caracter))
    {
        num = num + caracter;
        read(caracter);
    }
    token.símbolo = 'snúmero';
    token.lexema = num;

    return token;
}