// const catchToken = require('../app/js/lexico/catchToken')
const tokenModel = require('./Token');

class Lexic {

    constructor(program) {
        this.tokens = new Array; // Array<Tokens>
        this.program = Array.from(program);
        this.character = null;
    }

    main() {
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
                    this.tokens = insertList(this.character, this.tokens);
                    this.character = readCharacter(this.program);
                }
            }
            if(this.character == undefined) isFileEnd = true;
            if (!isFileEnd) {
                // this.tokens = insertList(this.character, this.tokens);
                // this.character = catchToken(this.program);
                this.tokens(insertList(catchToken(this.program), this.tokens));
            }
        }

        
        console.log(this.tokens.join(''));
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

function catchToken(character){
    // return character.shift()
}

module.exports = {Lexic}