export default class Token{

    constructor(){
        super();

        this.token = {
            lexem = "",
            symbol = ""
        }

        //this.lexem = "";
        //this.symbol = "";
    }

    getLexem = () => {
        return this.token.lexem;
    }

    getSymbol = () => {
        return this.token.lexem;
    }

    setLexem = (lexem) => {
        this.token.lexem = lexem;
    }

    setSymbol = (symbol) => {
        this.token.symbol = symbol;
    }

    setToken = (lexem,symbol) => {
        this.setSymbol(symbol);
        this.setLexem(lexem);
    }

    getToken = () => {
        return this.token;
    }
    
}