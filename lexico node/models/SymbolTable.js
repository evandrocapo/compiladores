const SymbolVar = require('../models/SymbolVar');
const SymbolProc = require('../models/SymbolProc');
const SymbolProgram = require('../models/SymbolProgram');

class SymbolTable{

    constructor() {
        this.stack = [];
    }

    getName(){
        return ;
    }

    setName(){
        return ;
    }

    inserir(tipo, lexem){
        if(tipo === "var") this.stack.push(new SymbolVar());
        else if(tipo === "proc") this.stack.push(new SymbolProc());
        else if(tipo === "program") this.stack.push(new SymbolProgram())
        else throw "error"

    }

    // inserirTipoTabela(){
    //     return ;   
    // }

    desempilhar(){
        return ;
    }

    pesquisarDupli(){
        return ;
    }

    pesquisarDeclaProc(){
        return ;
    }

    pesquisarDeclaFunc(){
        return ;
    }
}

module.exports = {SymbolTable}