//Imports
export const treatsPunctuation = (caracter) =>
{
    var punctuation = caracter;
    var token = 
    {
        símbolo:'',
        lexema:''
    }
    switch(punctuation)
    {
        case ';':
        token.símbolo = 'sponto_vírgula';
        break;
        case ',':
        token.símbolo = 'svírgula';
        break;
        case '(':
        token.símbolo = 'sabre_parênteses';
        break;
        case ')':
        token.símbolo = 'sfecha_parênteses';
        break;
        case '.':
        token.símbolo = 'sponto';
        break;
        default:
        //Erro
        break;
    }
    read(caracter);
    token.lexema = punctuation;

    return token;
}