class Error {
    constructor (type, line){
        this.type = type
        this.line = line
    }

    getType() {
        return this.type;
    }

    getLine() {
        return this.line;
    }

    setType(params){
        this.lexem = params;
    }

    setLine(params){
        this.line = params;
    }

    show()
    {
        return this.type + ' na linha ' + this.line;
    }
}

module.exports = {Error}