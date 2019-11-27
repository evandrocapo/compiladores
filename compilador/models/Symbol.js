class Symbol{

    constructor(lexem,scope){
        this.lexem = lexem;
        this.scope = scope;
    }

    getLexem(){
        return this.lexem;
    }

    setLexem(lexem){
        this.lexem = lexem;
    }

    getScope(){
        return this.scope;
    }

    setScope(scope){
        this.scope = scope;
    }
}

module.exports = {Symbol}