//imports

export const main = (arquivo) => 
{
    const token=
    {
        simbolo:"",
        lexema:""
    }

    var tipoToken;
    var caracter;
    var isFileEnd = false;
    var list;

    open(arquivo);
    read(caracter);

    while(!isFileEnd)
    {
        while(caracter === '{' || caracter === ' ' && !isFileEnd)
        {
            if(caracter === '{')
            {
                while(caracter !== '}' && !isFileEnd)
                {
                    read(caracter);
                }
            }
            read(caracter);
            while(caracter === ' ' && !isFileEnd)
            {
                read(caracter);
            }

        }
        if(!isFileEnd)//Dar uma olhada nessa condição
        {
            token = catchToken(caracter);
            insertList(token,list);
        }
    }
    close(arquivo);
    console.log(list);
}