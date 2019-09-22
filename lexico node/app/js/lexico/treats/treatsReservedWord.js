module.exports = (id, token) =>
{
    switch(id)
    {
        case 'programa':
            token.setSymbol('sprograma');
        break;
        case 'se':
            token.setSymbol('sse');
        break;
        case 'entao':
            token.setSymbol('sentao');
        break;
        case 'enquanto':
            token.setSymbol('senquanto');
        break;
        case 'faca':
            token.setSymbol('sfaca');
        break;
        case 'início':
            token.setSymbol('sinício');
        break;
        case 'fim':
            token.setSymbol('sfim');
        break;
        case 'escreva':
            token.setSymbol('sescreva');
        break;
        case 'leia':
            token.setSymbol('sleia');
        break;
        case 'var':
            token.setSymbol('svar');
        break;
        case 'inteiro':
            token.setSymbol('sinteiro');
        break;
        case 'booleano':
            token.setSymbol('sbooleano');
        break;
        case 'verdadeiro':
            token.setSymbol('sverdadeiro');
        break;
        case 'falso':
            token.setSymbol('sfalso');
        break;
        case 'procedimento':
            token.setSymbol('sprocedimento');
        break;
        case 'funcao':
            token.setSymbol('sfuncao');
        break;
        case 'div':
            token.setSymbol('sdiv');
        break;
        case 'e':
            token.setSymbol('se');
        break;
        case 'ou':
            token.setSymbol('sou');
        break;
        case 'nao':
            token.setSymbol('snao');
        break;
        default:
            token.setSymbol('sidentificador');
        break;
    }
    return {'token': token, 'program': program};
}