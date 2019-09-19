import Treats from './treats/Treats'
import Token from './token/Token';

export const catchToken = (caracter) =>
{
    var token = new Token();

    if(Number.isInteger(caracter))
    {
        token.getToken() = Treats.treatsDigit(caracter);
    }
    else if(caracter.value.match("/^[A-Za-z]+$/"))
    {
        token.getToken() = Treats.treatsIdentificator(caracter);
    }
    else if(caracter === ':')
    {
        token.getToken() = Treats.treatsAssignment(caracter);
    }
    else if(caracter === '+' || caracter === '-' || caracter ==='*')
    {
        token.getToken() = Treats.treatsArithmetic(caracter);
    }
    else if(caracter === '<' || caracter === '>' || caracter ==='=')
    {
        token.getToken() = Treats.treatsRelational(caracter);
    }
    else if(caracter === ';' || caracter === ',' || caracter ==='(' || caracter === ')' || caracter ==='.')
    {
        token.getToken() = Treats.treatsPunctuation(caracter);
    }
    else
    {
        //Erro
    }

    return token;
}