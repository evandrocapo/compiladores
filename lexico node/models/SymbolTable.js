const SymbolVar = require('../models/SymbolVar');
const SymbolProc = require('../models/SymbolProc');
const SymbolProgram = require('../models/SymbolProgram');

class SymbolTable{

    constructor() {
        this.stack = [];
    }

    inserir(tipo, lexem, scope){
        if(tipo === "var") this.stack.push(new SymbolVar(lexem, scope));
        else if(tipo === "proc") this.stack.push(new SymbolProc(lexem, scope));
        else if(tipo === "func") this.stack.push(new SymbolProc(lexem, scope));
        else if(tipo === "program") this.stack.push(new SymbolProgram(lexem, scope));
        else throw "error";
    }

    desempilhar(lexem){
        while(lexem != this.stack.pop().symbol.lexem)
        return this.stack.pop();
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