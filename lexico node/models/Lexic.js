const catchToken = require('../app/js/lexico/catchToken')
const tokenModel = require('./Token');

class Lexic {

    constructor(program) {
        this.tokens = new Array; // Array<Tokens>
        this.program = Array.from(program);
        this.character = null;
    }

    async main() {
        var isFileEnd = false;
        var list;

        this.character = readCharacter(this.program);

        while (!isFileEnd) {
            while (this.character === '{' || this.character === ' ' && !isFileEnd) {
                if (this.character === '{') {
                    while (this.character !== '}' && !isFileEnd) {
                        this.character = readCharacter(this.program);
                    }
                    this.character = readCharacter(this.program);
                }
                while (this.character === ' ' && !isFileEnd) {
                    // this.tokens = insertList(this.character, this.tokens);
                    this.character = readCharacter(this.program);
                }
            }
            if(this.character == undefined) isFileEnd = true;
            if (!isFileEnd) {
                // this.tokens = insertList(this.character, this.tokens);
                // this.character = catchToken(this.program);
                let result = catchToken(this.character,this.program)
                this.tokens = insertList(result.token, this.tokens);
                this.program = result.program
                if(this.program.length <= 0) isFileEnd = true;
                this.character = readCharacter(this.program)
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

function readCharacter(program){
    return program.shift();
}

module.exports = {Lexic}