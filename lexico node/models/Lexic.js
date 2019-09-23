const catchToken = require('../app/js/lexico/catchToken')
const tokenModel = require('./Token');

class Lexic {

    constructor(program) {
        this.tokens = new Array; // Array<Tokens>
        this.program = Array.from(program);
        this.character = null;
        this.linha = 1;
    }

    async main() {
        var isFileEnd = false;
        var list;
        console.log(this.linha)

        let result = readCharacter(this.program, this.linha);
        this.character = result.char;
        this.linha = result.linha

        while (!isFileEnd) {
            while (this.character === '{' || this.character === ' ' || this.character === '\t' && !isFileEnd) {
                if (this.character === '{') {
                    while (this.character !== '}' && !isFileEnd) {
                        let result = readCharacter(this.program, this.linha);
                        this.character = result.char;
                        this.linha = result.linha
                    }
                    let result = readCharacter(this.program, this.linha);
                    this.character = result.char;
                    this.linha = result.linha
                }
                while (this.character === ' ' || this.character === '\t' && !isFileEnd) {
                    // this.tokens = insertList(this.character, this.tokens);
                    let result = readCharacter(this.program, this.linha);
                    this.character = result.char;
                    this.linha = result.linha
                }
            }
            if(this.character == undefined) isFileEnd = true;
            if (!isFileEnd) {
                // this.tokens = insertList(this.character, this.tokens);
                // this.character = catchToken(this.program);
                let result = catchToken(this.character,this.program, this.linha);
                this.tokens = insertList(result.token, this.tokens);
                this.program = result.program;
                this.character = result.character;
                if(this.program.length <= 0 && this.character == undefined) isFileEnd = true;
                console.log(this.character)
            }
        }

        
        console.log(this.tokens);
        return this.tokens;
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

module.exports = {Lexic}