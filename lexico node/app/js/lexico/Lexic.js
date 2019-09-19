import catchToken from './catchToken'
import Token from './token/Token';

export default class Lexic {

    constructor() {
        super();

        this.tokens = null;
        this.program = null;
        this.character = null;
    }

    main = (arquivo) => {
        const token = new Token();

        var tipoToken;
        var caracter;
        var isFileEnd = false;
        var list;

        open(arquivo);
        read(caracter);

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