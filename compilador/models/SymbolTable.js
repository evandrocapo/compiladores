const SymbolVar = require('../models/SymbolVar');
const SymbolProc = require('../models/SymbolProc');
const SymbolProgram = require('../models/SymbolProgram');

class SymbolTable{

    constructor() {
        this.stack = [];
    }

    inserir(tipo, lexem, scope, labeloumem){
        if(tipo === "var") this.stack.push(new SymbolVar.SymbolVar(lexem, scope, labeloumem));
        else if(tipo === "proc") this.stack.push(new SymbolProc.SymbolProc(lexem, scope, labeloumem));
        else if(tipo === "func") this.stack.push(new SymbolProc.SymbolProc(lexem, scope, labeloumem));
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
            if(aux.type === null)
            aux.type = lexem;
            this.stack.push(aux)
        }while(stackTipo.length > 0)
    }

    desempilhar(scope,memory){
        var a;
        
        while(((a = this.stack.pop()) instanceof SymbolVar.SymbolVar) || a.symbol.lexem !== scope){
            memory[0]--;
        }
        this.stack.push(a)

        for(let i = this.stack.length-2; i>=0; i--)
        {
            if(this.stack[i] !== undefined){
            if(!(this.stack[i] instanceof SymbolVar.SymbolVar))
            return this.stack[i].symbol.lexem
            }
        }
        return null;
        // memory -= 1;
        //return memory;
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

        if(stackDupli.length>0)
        do{
            if(stackDupli.pop().symbol.lexem == lexem) return true
            
        }while(stackDupli.length > 0);
        return false;
    }

    pesquisar(lexem){
        
        var stackDuplic = this.stack.slice();
        var aux;
        
        while(!(stackDuplic[stackDuplic.length-1] instanceof SymbolProgram.SymbolProgram)){
            aux = stackDuplic.pop();
            if(aux.symbol.lexem == lexem) return aux;
        }

        return null;
    }

    tam()
    {
        return this.stack.length
    }

    varQtd()
    {
        let qtd = 0;

        for(let i = 0 ; i < this.stack.length ; i++)
        {
            if(this.stack[i] instanceof SymbolVar.SymbolVar)
            qtd++;
        }
        return qtd;
    }
}

module.exports = {SymbolTable}