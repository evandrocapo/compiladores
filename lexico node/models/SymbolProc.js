const Symbol = require('../models/Symbol');

class SymbolProc{

    constructor(lexam,scope, label){
        this.type = null;
        this.label = label;
        this.symbol = new Symbol.Symbol(lexam,scope);
    }

}

module.exports = {SymbolProc}