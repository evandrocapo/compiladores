export const catchToken = (caracter) =>
{
    var token;
    
    if(Number.isInteger(caracter))
    {
        //Trata Digito
    }
    else if(caracter.value.match("/^[A-Za-z]+$/"))
    {
        //Trata Identificador e Palavra Reservada
    }
    else if(caracter === ':')
    {
        //Trata Atribuição
    }
    else if(caracter === '+' || caracter === '-' || caracter ==='*')
    {
        //Trata Operador Aritmético
    }
    else if(caracter === '<' || caracter === '>' || caracter ==='=')
    {
        //TrataOperadorRelacional
    }
    else if(caracter === ';' || caracter === ',' || caracter ==='(' || caracter === ')' || caracter ==='.')
    {
        //Trata Pontuação
    }
    else
    {
        //Erro
    }

    return token;
}