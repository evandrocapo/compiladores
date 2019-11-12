const Symbol = require('../models/Symbol');

class SymbolProc{

    constructor(lexam,scope){
        this.symbol = new Symbol(lexam,scope);
    }

}

module.exports = {SymbolProc}