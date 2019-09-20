import catchToken from '../app/js/lexico/catchToken'
import Token from '../app/js/lexico/token/Token';

export default class Lexic {

    constructor(program) {
        this.tokens = null;
        this.program = program;
        this.character = null;
    }

    main = (arquivo) => {
        const token = new Token();

        var tipoToken;
        var caracter;
        var isFileEnd = false;
        var list;

        read(caracter, i);

        while (!isFileEnd) {
            while (caracter === '{' || caracter === ' ' && !isFileEnd) {
                if (caracter === '{') {
                    while (caracter !== '}' && !isFileEnd) {
                        read(caracter);
                    }
                }
                while (caracter === ' ' && !isFileEnd) {
                    read(caracter);
                }

            }
            if (!isFileEnd) {
                token = catchToken(caracter);
                insertList(token, list);
            }
        }
        close(arquivo);
        console.log(list);
    }

    insertList = (list) => {

    }

    catchToken = (caracter) => catchToken;

    readCharacter = () => {

    }

}