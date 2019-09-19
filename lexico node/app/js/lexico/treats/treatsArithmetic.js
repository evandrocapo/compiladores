import Token from "../token/Token";

//Imports
export const treatsArithmetic = (caracter) =>
{
    var arithmetic = caracter;
    var token = new Token();

    switch(arithmetic)
    {
        case '+':
        token.setSymbol('smais');
        break;
        case '-':
            token.setSymbol('smenos');
        break;
        case '*':
            token.setSymbol('smult');
        break;
        default:
        //Erro
        break;
    }
    read(caracter);
    token.setLexem(arithmetic);

    return token;
}