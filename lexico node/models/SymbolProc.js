const Symbol = require('../models/Symbol');

class SymbolProc{

    constructor(lexam,scope){
        this.type = null;
        this.symbol = new Symbol.Symbol(lexam,scope);
    }

}

module.exports = {SymbolProc}