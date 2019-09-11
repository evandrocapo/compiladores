//Imports
export const treatsArithmetic = (caracter) =>
{
    var arithmetic = caracter;
    var token = 
    {
        símbolo:'',
        lexema:''
    }
    switch(arithmetic)
    {
        case '+':
        token.símbolo = 'smais';
        break;
        case '-':
        token.símbolo = 'smenos';
        break;
        case '*':
        token.símbolo = 'smult';
        break;
        default:
        //Erro
        break;
    }
    read(caracter);
    token.lexema = arithmetic;

    return token;
}