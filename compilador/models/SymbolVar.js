const Symbol = require('../models/Symbol');

class SymbolVar {

    constructor(lexam, scope, memory) {
        this.type = null;
        this.value = null;
        this.memPos = memory;
        this.symbol = new Symbol.Symbol(lexam, scope);
    }

    getType() {
        return this.type;
    }

    setType(type) {
        this.type = type;
    }

    getValue() {
        return this.value;
    }

    setValue(value) {
        this.value = value;
    }

    getMemPos() {
        return this.memPos;
    }

    setMemPos(memPos) {
        this.memPos = memPos;
    }
}

module.exports = { SymbolVar }