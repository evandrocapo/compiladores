class Token {
    constructor (lexem, symbol, line){
        this.lexem = lexem
        this.symbol = symbol
        this.line = line
    }

    getLexem() {
        return this.lexem;
    }

    setLexem(params){
        this.lexem = params;
    }

    getSymbol() {
        return this.symbol;
    }

    setSymbol(params){
        this.symbol = params;
    }

    setToken(lexem,symbol){
        this.symbol;
        this.lexem;
    }
}

module.exports = {Token}