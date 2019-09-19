class Token {
    constructor (lexem, symbol){
        this.lexem = lexem
        this.symbol = symbol
    }

    getLexem() {
        return this.lexem;
    }

    getSymbol() {
        return this.symbol;
    }

    setLexem(params){
        this.lexem = params;
    }

    setSymbol(params){
        this.symbol = params;
    }
}

module.exports = {Token}