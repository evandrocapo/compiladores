const Symbol = require('../models/Symbol');

class SymbolProgram{

    constructor(lexam,scope){
        this.symbol = new Symbol.Symbol(lexam,scope);
    }

}

module.exports = {SymbolProgram}