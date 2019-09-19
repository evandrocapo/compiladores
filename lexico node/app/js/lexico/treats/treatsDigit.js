import Token from "../token/Token";

//Imports
export const treatsDigit = (caracter) =>
{
    var num = caracter;
    var token = new Token();
    
    read(caracter);

    while((Number.isInteger(caracter)))
    {
        num = num + caracter;
        read(caracter);
    }
    token.setSymbol('snúmero');
    token.setLexem(num);

    return token;
}