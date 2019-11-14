const SymbolVar = require('../models/SymbolVar');
const SymbolProc = require('../models/SymbolProc');
const SymbolProgram = require('../models/SymbolProgram');

class SymbolTable{

    constructor() {
        this.stack = [];
    }

    inserir(tipo, lexem, scope){
        if(tipo === "var") this.stack.push(new SymbolVar.SymbolVar(lexem, scope));
        else if(tipo === "proc") this.stack.push(new SymbolProc.SymbolProc(lexem, scope));
        else if(tipo === "func") this.stack.push(new SymbolProc.SymbolProc(lexem, scope));
        else if(tipo === "program") this.stack.push(new SymbolProgram.SymbolProgram(lexem, scope));
        else throw "SymbolTable error";
    }

    inserirTipo(lexem){
        var stackTipo=[],aux;

        do{
            stackTipo.push(this.stack.pop()) // retira da pilha e joga na aux
        }while(((stackTipo[stackTipo.length-1] instanceof SymbolVar.SymbolVar)) || ((stackTipo[stackTipo.length-1] instanceof SymbolProc.SymbolProc)));

        this.stack.push(stackTipo.pop()) // retorna para a pilha o tipo "var ou func"

        do{
            aux = stackTipo.pop()
            aux.type = lexem;
            this.stack.push(aux)
        }while(stackTipo.length > 0)
    }

    desempilhar(){
        var a;
        while((a = this.stack.pop()) instanceof SymbolVar.SymbolVar){}
        this.stack.push(a)
        return ;
    }

    pesquisarDupli(lexem,scope){
        var a,stackDupli=[];
        do{
            a = this.stack.pop();
            stackDupli.push(a);
        }
        while(a instanceof SymbolVar.SymbolVar);
        this.stack.push(stackDupli.pop());
        this.stack = this.stack.concat(stackDupli.reverse()); // voltou a pilha
        stackDupli.reverse(); // reverta de novo

        do{
            if(stackDupli == lexem) return true
            stackDupli.pop()
        }while(stackDupli.length > 0);
        return false;
    }

    pesquisar(lexem,scope){
        
        var stackDuplic = this.stack.slice();
        console.log(stackDuplic)
        var aux;
        
        while(!(stackDuplic[stackDuplic.length-1] instanceof SymbolProgram.SymbolProgram)){
            aux = stackDuplic.pop();
            // console.log(aux)
            if(aux.symbol.lexem == lexem) return aux;
        }

        return null;
    }
}

module.exports = {SymbolTable}