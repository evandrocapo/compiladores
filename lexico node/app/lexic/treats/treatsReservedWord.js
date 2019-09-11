export const export reservedWord = (id, token) =>
{
    switch(id)
    {
        case 'programa':
        token.símbolo = 'sprograma';
        break;
        case 'se':
        token.símbolo = 'sse';
        break;
        case 'entao':
        token.símbolo = 'sentao';
        break;
        case 'enquanto':
        token.símbolo = 'senquanto';
        break;
        case 'faca':
        token.símbolo = 'sfaca';
        break;
        case 'início':
        token.símbolo = 'sinício';
        break;
        case 'fim':
        token.símbolo = 'sfim';
        break;
        case 'escreva':
        token.símbolo = 'sescreva';
        break;
        case 'leia':
        token.símbolo = 'sleia';
        break;
        case 'var':
        token.símbolo = 'svar';
        break;
        case 'inteiro':
        token.símbolo = 'sinteiro';
        break;
        case 'booleano':
        token.símbolo = 'sbooleano';
        break;
        case 'verdadeiro':
        token.símbolo = 'sverdadeiro';
        break;
        case 'falso':
        token.símbolo = 'sfalso';
        break;
        case 'procedimento':
        token.símbolo = 'sprocedimento';
        break;
        case 'funcao':
        token.símbolo = 'sfuncao';
        break;
        case 'div':
        token.símbolo = 'sdiv';
        break;
        case 'e':
        token.símbolo = 'se';
        break;
        case 'ou':
        token.símbolo = 'sou';
        break;
        case 'nao':
        token.símbolo = 'snao';
        break;
        default:
        token.símbolo = 'sidentificador';
        break;
    }
    return token.símbolo;
}