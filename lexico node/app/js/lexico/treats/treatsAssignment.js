import Token from "../token/Token";

export const treatsAssignment = (caracter) =>
{
    var assignment = caracter;
    var token = new Token();
    read(caracter);

    if(caracter === '=')
    {
        assignment = assignment + caracter;
        read(caracter);
        token.setSymbol('satribuiçao');
    }
    else
    {
        token.setSymbol('sdoispontos');
    }
    token.setSymbol(assignment);

    return token;
}