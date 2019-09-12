import treatsDigit from './treats/treatsDigit'
import treatsIdentificator from './treats/treatsIdentificator'
import treatsAssignment from './treats/treatsAssignment'
import treatsPunctuation from './treats/treatsPunctuation'
import treatsRelational from './treats/treatsRelational'

export const catchToken = (caracter) =>
{
    var token = 
    {
        símbolo:'',
        lexema:''
    }

    if(Number.isInteger(caracter))
    {
        token = treatsDigit(caracter);
    }
    else if(caracter.value.match("/^[A-Za-z]+$/"))
    {
        token = treatsIdentificator(caracter);
    }
    else if(caracter === ':')
    {
        token = treatsAssignment(caracter);
    }
    else if(caracter === '+' || caracter === '-' || caracter ==='*')
    {
        token = treatsArithmetic(caracter);
    }
    else if(caracter === '<' || caracter === '>' || caracter ==='=')
    {
        token = treatsRelational(caracter);
    }
    else if(caracter === ';' || caracter === ',' || caracter ==='(' || caracter === ')' || caracter ==='.')
    {
        token = treatsPunctuation(caracter);
    }
    else
    {
        //Erro
    }

    return token;
}