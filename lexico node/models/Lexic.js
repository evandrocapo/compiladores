const catchToken = require('../app/js/lexico/catchToken')
const tokenModel = require('./Token');

class Lexic {

    constructor() {
        this.tokens = new Array; // Array<Tokens>
        this.program = null //Array.from(program);
        this.character = null;
        this.linha = 1;
        this.isFileEnd = false;
    }

    getInstance()
    {
        if(instance === null || instance === undefined)
        {
            this.instance = new Lexic();
        }
        return this.instance;
    }

    setProgram(program){
        this.program = Array.from(program);
    }


    doLexic() {
        // var this.isFileEnd = false;
        var list;

        let result = readCharacter(this.program, this.linha);
        this.character = result.char;
        this.linha = result.linha

        try{
            //while (!this.isFileEnd) {
                while (this.character === '{' || this.character === ' ' || this.character === '\t' && !this.isFileEnd) {
                    if (this.character === '{') {
                        while (this.character !== '}' && !this.isFileEnd) {
                            let result = readCharacter(this.program, this.linha);
                            this.character = result.char;
                            this.linha = result.linha
                            if(this.character == undefined) throw "O arquivo acabou e nao houve o fechamento do comentario. \nLinha: " + this.linha;
                        }
                        let result = readCharacter(this.program, this.linha);
                        this.character = result.char;
                        this.linha = result.linha
                    }
                    while (this.character === ' ' || this.character === '\t' && !this.isFileEnd) {
                        let result = readCharacter(this.program, this.linha);
                        this.character = result.char;
                        this.linha = result.linha
                    }
                }
                if(this.character == undefined) this.isFileEnd = true;
                if (!this.isFileEnd) {
                    let result = catchToken(this.character,this.program, this.linha);
                    //this.tokens = insertList(result.token, this.tokens);
                    this.program = result.program;
                    this.character = result.character;
                    result = verificador(this.character,this.program,this.linha)
                    this.character = result.char;
                    this.program = result.program;
                    this.linha = result.linha;
                    if(this.program.length <= 0 && this.character == undefined) this.isFileEnd = true; 
                }
           // }
            // console.log(this.tokens);
            console.log(result.token);
            //return this.tokens;
            return result.token;
        }catch(error){
            throw error;
        }
    }

}

function insertList (token,listaTokens){
    listaTokens.push(token)
    return listaTokens;
}

function readCharacter(program, linha){
    let char = program.shift();
    let i = 0;

    while(char == '\n' || char == '\r') {
        char = program.shift();
        i = i + 1;
    }

    linha = linha + (i/2);

    return {'char': char, 'linha': linha};
}

function verificador(char,program, linha){
    let i = 0;

    while(char == '\n' || char == '\r') {
        char = program.shift();
        i = i + 1;
    }

    linha = linha + (i/2);

    return {'char': char, 'program': program, 'linha': linha};
}

module.exports = {Lexic}