const Lexic = require('./Lexic');
const Error = require('../models/Error');
const SymbolProc = require('../models/SymbolProc');
const SymbolVar = require('../models/SymbolVar');
const Semantic = require('../models/Semantic');

class Analyze {
    constructor(symbolTable, label, generator, alloc, scope) {
        this.lexic = Lexic;
        this.scope = '';
        this.symbolTable = symbolTable;
        this.expression = new Array();
        this.expressionType = '';
        this.doPosFixa = 0;
        this.actualFunction = {
            lexem: null,
            returned: -2,
        }
        this.label = label;
        this.generator = generator;
        this.memory = 0;
        this.pilha = [];
        this.quant = [];
        this.alloc = alloc = [];
        this.returnIfStack = new Array();
        this.returnF = new Array();
    }

    setScope(scope) {
        this.scope = scope;
    }


    analyzeAssignment(token, variable)///////////////////////////////
    {
        if (variable === null) {
            throw new Error.Error('Error -> Variavel nao declarada', token.line).show()
        }
        else {

        }
        token = this.lexic.doLexic()
        this.expression = new Array();
        token = this.analyzeExpression(token)
        try {
            this.expressionType = new Semantic.Semantic().verifyType(this.expression, this.symbolTable)
        } catch (error) {
            error.setLine(token.line);
            throw error.show();
        }


        if (variable)
            if (variable.type === 'inteiro') {
                if (this.expressionType.pop() !== 'I') {
                    throw new Error.Error('Error -> Variavel do tipo inteiro', token.line).show()
                }
            }
            else {
                if (this.expressionType.pop() !== 'B') {
                    throw new Error.Error('Error -> Variavel do tipo booleano', token.line).show()
                }
            }

        this.symbolTable.pesquisar(token.lexem, this.scope)

        this.geraExpress(this.expression);
        if (variable instanceof SymbolVar.SymbolVar)
            this.generator.gera('', 'STR', variable.memPos, '');

        return token
    }
    analyzeAtribCallProc(token, isIf) {
        var variable = this.symbolTable.pesquisar(token.lexem, this.scope)
        if (variable !== null) {
            var tokenAux = token;


            
            token = this.analyzeReturnF(token, isIf)



            if (tokenAux === token) {
                token = this.lexic.doLexic()
                if (token.symbol === 'satribuicao') {
                    if (!(variable instanceof SymbolVar.SymbolVar)) {
    
                        throw new Error.Error('Error -> Esperava variavel', token.line).show()
                    }
                    token = this.analyzeAssignment(token, variable)

                }
                else {

                    token = this.analyzeCallProc(token, variable)
                }
            }
        }
        else {
            throw new Error.Error('Error -> Declaracao nao existente', token.line).show()
        }

        return token
    }
    analyzeBlock(token) {


        token = this.lexic.doLexic()
        token = this.analyzeStepVariables(token)
        token = this.analyzeSubRotine(token)
        token = this.analyzeCommands(token)


        return token;
    }
    analyzeCallFunc(token)/////////////////////////////////////////////////
    {
        if (token.symbol === 'sidentificador') {
            let variable = this.symbolTable.pesquisar(token.lexem, this.scope);
            this.generator.gera('', 'CALL', variable.label, '');
        }
        else {
            throw new Error.Error("Erro -> Chamada de funcao", token.line).show()
        }
        token = this.lexic.doLexic()
        return token
    }

    analyzeCallProc(token, variable)////////////////////////////////////////////////////
    {
        //if(this.symbolTable.pesquisar(variable.symbol.lexem,this.scope))
        this.generator.gera('', 'CALL', variable.label, '');
        //else throw new Error.Error("Erro -> Procedimento nao declarado",token.line).show()
        return token
    }

    analyzeCommands(token, isIf) {

        if (token.symbol === 'sinicio') {
            token = this.lexic.doLexic()
            token = this.analyzeSimpleCommand(token, isIf)
            while (token.symbol !== 'sfim') {
                if (token.symbol === 'sponto_virgula') {
                    token = this.lexic.doLexic()
                    if (token.symbol !== 'sfim') {
                        token = this.analyzeSimpleCommand(token, isIf)
                    }
                }
                else {
                    throw new Error.Error("Erro -> Esperava ;", token.line).show()
                }
            }
            token = this.lexic.doLexic()
        }
        else {
            throw new Error.Error("Erro -> Esperava inicio", token.line).show()
        }

        return token
    }

    analyzeExpression(token) {


        token = this.analyzeSimpleExpression(token)

        if (token.symbol === 'smaior' || token.symbol === 'sig' || token.symbol === 'smenor' || token.symbol === 'smenorig' || token.symbol === 'sdif' || token.symbol === 'smaiorig') {
            this.lexic = this.lexic;
            this.expression.push(token.lexem)
            token = this.lexic.doLexic()
            token = this.analyzeSimpleExpression(token)
        }
        if (this.doPosFixa === 0) {
            this.expression = new Semantic.Semantic().posFixa(this.expression)

        }

        return token;
    }

    analyzeFactor(token)////////////////////////////
    {
        var tabela = null

        this.expression.push(token.lexem)

        if (token.symbol === 'sidentificador') {
            tabela = this.symbolTable.pesquisar(token.lexem, this.scope)
            if (tabela) {

                if (tabela.symbol === 'sinteiro' || tabela.symbol === 'sbooleano' && (tabela instanceof SymbolProc.SymbolProc)) {
                    token = this.analyzeCallFunc(token)
                    token = this.lexic.doLexic()
                }
                else {
                    token = this.lexic.doLexic()
                }
            }
            else {
                throw new Error.Error("Erro -> Fator nao declarado", token.line).show()
            }
        }
        else if (token.symbol === 'snumero') {
            token = this.lexic.doLexic()
        }
        else if (token.symbol === 'snao') {
            token = this.lexic.doLexic()
            token = this.analyzeFactor(token)
        }
        else if (token.symbol === 'sabre_parenteses') {
            token = this.lexic.doLexic()
            this.doPosFixa++;
            token = this.analyzeExpression(token)

            if (token.symbol === 'sfecha_parenteses') {
                this.expression.push(token.lexem)
                this.doPosFixa--;
                token = this.lexic.doLexic()
            }
            else {
                'Erro -> Esperava fecha parenteses'
            }
        }
        else if (token.lexem === 'verdadeiro' || token.lexem === 'falso') {
            token = this.lexic.doLexic()
        }
        else {
            throw new Error.Error("Erro -> Esperava um fator", token.line).show()
        }

        return token

    }

    analyzeReturnF(token, isIf) {
            var variable = this.symbolTable.pesquisar(this.actualFunction.lexem, this.scope)
            if (this.actualFunction) {
                if (token.lexem === this.actualFunction.lexem) {
                    token = this.lexic.doLexic()
                    token = this.analyzeAssignment(token, variable)
                    if (isIf) {
                        if (this.actualFunction.returned !== 0)
                            this.actualFunction.returned = 1;
                    }
                    else
                        this.actualFunction.returned = 0;

                    let param2 = 0;
                    let param1 = 0;
                    //if (this.returnF === 0) {
// RETIRAR DEPOIS
                        

                        for (let i = this.alloc.length - 1; i >= 0; i--) {

                            if (this.alloc[i][2] === this.scope) {
                                param2 += this.alloc[i][1];
                                param1 = this.alloc[i][0];
                                this.returnF.push(i)
                            }

                        }
                        if (param2 > 0)
                            this.generator.gera('', 'RETURNF', param1, param2)
                        else
                            this.generator.gera('', 'RETURNF', null, null)
                //}


                }
            }
        


        return token;
    }

    analyzeFuncDeclaration(token) {

        this.actualFunction = {
            lexem: null,
            returned: -1
        };

        token = this.lexic.doLexic()

        if (token.symbol === 'sidentificador') {
            
            if (!this.symbolTable.pesquisar(token.lexem, this.scope)) {
                this.actualFunction.lexem = token.lexem;
                this.symbolTable.inserir('proc', token.lexem, this.scope, this.label) // add rotulo
                this.scope = token.lexem; 
                this.generator.gera(this.label, null, '', '');
                token = this.lexic.doLexic()
                if (token.symbol === 'sdoispontos') {
                    token = this.lexic.doLexic()
                    if (token.symbol === 'sinteiro' || token.symbol === 'sbooleano') {
                        if (token.symbol === 'sinteiro') {
                            this.symbolTable.inserirTipo(token.lexem)
                        }
                        else {
                            this.symbolTable.inserirTipo(token.lexem)
                        }
                        token = this.lexic.doLexic()
                        if (token.symbol === 'sponto_virgula') {
                            token = this.analyzeBlock(token)

                        }
                    }
                    else {
                        throw new Error.Error("Erro -> Erro no tipo", token.line).show()
                    }

                }
                else {
                    throw new Error.Error("Erro -> Esperava :", token.line).show()
                }

            }
            else {
                throw new Error.Error("Erro -> Nome de funcao existente", token.line).show()
            }

            let scope = this.symbolTable.desempilhar();
            if (scope)
                this.scope = scope;
            //this.memory = this.symbolTable.desempilhar(this.memory);
        }


        

        if (this.actualFunction.returned !== 0 && this.returnIfStack.length > 0) {
            throw new Error.Error('Error -> Funcao sem retorno', token.line).show()
        }
        
        if (this.actualFunction.returned === -1) {
            throw new Error.Error('Error -> Funcao sem retorno', token.line).show()
        }



        this.actualFunction = {
            lexem: null,
            returned: -2
        };


        for (let a = 0; a < this.returnF.length; a++) {
            this.alloc.slice(i,1);
        }

        this.returnF = new Array();

        return token
    }

    analyzeIf(token) {
        var analyzeReturn = this.actualFunction.returned;
        
        token = this.lexic.doLexic()
        this.expression = new Array();
        token = this.analyzeExpression(token)
        try {
            this.expressionType = new Semantic.Semantic().verifyType(this.expression, this.symbolTable)
        }
        catch (error) {
            error.setLine(token.line);
            throw error.show();
        }

        if (this.expressionType.pop() !== 'B') {
            throw new Error.Error('Error -> Esperava expressao booleana', token.line).show()
        }

        this.geraExpress(this.expression)

        let label = this.label;
        this.label += 1;
        this.generator.gera('', 'JMPF', label, '')

        if (token.symbol === 'sentao') {
            token = this.lexic.doLexic()


            token = this.analyzeSimpleCommand(token, true)



            if (analyzeReturn === -1) {
                if (this.actualFunction.returned === 1) {

                    this.returnIfStack.push('returned')
                }
                else {
                    this.returnIfStack.push('notReturned')
                }
                if(this.actualFunction.returned!==0)
                this.actualFunction.returned = 2;
            }

            
            let labelAux = this.label;

            if (token.symbol === 'ssenao') {
                
                this.generator.gera('', 'JMP', this.label, '')
                this.generator.gera(label, null, '', '')
                this.label++;
                token = this.lexic.doLexic()
                

                token = this.analyzeSimpleCommand(token, true)

                if (analyzeReturn === -1) {
                    if (this.actualFunction.returned === 1) {
                        var result = this.returnIfStack.pop()
                        if (result !== 'returned')
                            this.returnIfStack.push('erro')
                    }
                    else {
                        var result = this.returnIfStack.pop()
                        if (result !== 'notReturned')
                            this.returnIfStack.push('erro')
                    }
                    if(this.actualFunction.returned!==0)
                    this.actualFunction.returned = 2;
                }

            }
            else {
                if (analyzeReturn !== -1)
                    this.returnIfStack.pop()
            }
            if(this.label !== labelAux)
            this.generator.gera(labelAux, null, '', '')
            else
            this.generator.gera(label, null, '', '')
        }
        else {
            throw new Error.Error('Erro -> Esperava então', token.line).show()
        }
        return token
    }

    analyzeProcDeclaration(token) {
        token = this.lexic.doLexic()

        if (token.symbol === 'sidentificador') {
            
            if (!this.symbolTable.pesquisar(token.lexem, this.scope)) {
                this.symbolTable.inserir('proc', token.lexem, this.scope, this.label) //add rotulo
                this.scope = token.lexem;
                this.generator.gera(this.label, null, '', '');
                this.label += 1;

                token = this.lexic.doLexic()
                if (token.symbol === 'sponto_virgula') {

                    token = this.analyzeBlock(token)


                    let param2 = 0;
                    let param1 = 0;

                    

                    for (let i = this.alloc.length - 1; i >= 0; i--) {

                        if (this.alloc[i][2] === this.scope) {
                            param1 = this.alloc[i][0];
                            param2 += this.alloc[i][1];  
                            this.alloc.slice(i,1);
                        }

                    }
                    if (param2 > 0)
                        this.generator.gera('', 'DALLOC', param1, param2)



                }
                else {
                    throw new Error.Error("Erro -> Esperava ;", token.line).show()
                }
            }
            else {
                throw new Error.Error("Erro -> Nome de procedimento existente", token.line).show()
            }
            let scope = this.symbolTable.desempilhar();
            if (scope)
                this.scope = scope;
            //this.memory = this.symbolTable.desempilhar(this.memory);
            this.generator.gera('', 'RETURN', '', '');
        }

        return token
    }

    analyzeRead(token) {
        token = this.lexic.doLexic()
        if (token.symbol === 'sabre_parenteses') {
            token = this.lexic.doLexic()
            if (token.symbol === 'sidentificador') {
                var variable = this.symbolTable.pesquisar(token.lexem);
                if (variable) {
                    this.generator.gera('', 'RD', '', ''); // Generator
                    this.generator.gera('', 'STR', variable.memPos, ''); // Generator
                
                    if (!(variable instanceof SymbolVar.SymbolVar)) {
                        throw new Error.Error('Error -> Esperava variavel', token.line).show()
                    }
                    token = this.lexic.doLexic()
                    if (token.symbol === 'sfecha_parenteses') {
                        token = this.lexic.doLexic()
                    }
                    else {
                        throw new Error.Error("Erro -> Esperava )", token.line).show()
                    }
                }
                else {
                    throw new Error.Error("Erro -> Variavel nao declarada", token.line).show()
                }
            } else {
                throw new Error.Error("Erro -> Esperava identificador", token.line).show()
            }
        }
        else {
            throw new Error.Error("Erro -> Esperava (", token.line).show()
        }

        return token
    }


    analyzeSimpleCommand(token, isIf) {
        switch (token.symbol) {
            case 'sidentificador':
                token = this.analyzeAtribCallProc(token, isIf)
                break;
            case 'sse':
                token = this.analyzeIf(token)
                break;
            case 'senquanto':
                token = this.analyzeWhile(token, isIf)
                break;
            case 'sleia':
                token = this.analyzeRead(token)
                break;
            case 'sescreva':
                token = this.analyzeWrite(token)
                break;
            default:
                token = this.analyzeCommands(token, isIf)
                break;
        }

        return token
    }

    analyzeSimpleExpression(token) {

        if (token.symbol === 'smais' || token.symbol === 'smenos') {

            if (token.symbol === 'smais') {
                token.lexem = '+u'
            }
            else {
                token.lexem = '-u'
            }
            this.expression.push(token.lexem)
            token = this.lexic.doLexic()
        }
        token = this.analyzeTerm(token)


        while (token.symbol === 'smais' || token.symbol === 'smenos' || token.symbol === 'sou') {
            this.expression.push(token.lexem)
            token = this.lexic.doLexic()
            token = this.analyzeTerm(token)

        }

        return token
    }

    analyzeStepVariables(token) {
        if (token.symbol === 'svar') {
            token = this.lexic.doLexic()
            if (token.symbol === 'sidentificador') {
                while (token.symbol === 'sidentificador') {
                    token = this.analyzeVariables(token)
                    if (token.symbol === 'sponto_virgula') {
                        token = this.lexic.doLexic()
                    }
                    else {
                        throw new Error.Error("Erro -> Esperava ;", token.line).show()
                    }

                }
            }
            else {
                throw new Error.Error("Erro -> Esperava identificador", token.line).show()
            }
        }

        return token

    }

    analyzeVariables(token) {
        let quant = 0;
        do {
            if (token.symbol === 'sidentificador') {
                if (!this.symbolTable.pesquisarDupli(token.lexem)) {
                    this.symbolTable.inserir('var', token.lexem, this.scope, this.memory)
                    quant += 1; // quantidade de alloc;
                    this.memory += 1;
                    token = this.lexic.doLexic()
                    if (token.symbol === 'svirgula' || token.symbol === 'sdoispontos') {
                        if (token.symbol === 'svirgula') {
                            token = this.lexic.doLexic()
                            if (token.symbol === 'sdoispontos') {
                                throw new Error.Error("Erro -> : nao esperado", token.line).show()
                            }
                        }
                    }
                    else {
                        throw new Error.Error("Erro -> Esperava , ou :", token.line).show()
                    }
                }
                else {
                    throw new Error.Error("Erro -> Variavel com nome existente", token.line).show()
                }
            }
            else {
                throw new Error.Error("Erro -> Esperava identificador", token.line).show()
            }
        }
        while (token.symbol !== 'sdoispontos')

        let quantAux = 0;
        for (let i = 0; i < this.quant.length; i++) {
            quantAux += this.quant[i];
        }

        this.generator.gera('', 'ALLOC', quantAux, quant);
        this.alloc.push([quantAux, quant, this.scope])
        this.quant.push(quant)
        token = this.lexic.doLexic()
        return this.analyzeType(token)
    }

    analyzeSubRotine(token) {
        if (token.symbol === 'sprocedimento' || token.symbol === 'sfuncao') {
            let auxrot, flag; // semantico
            auxrot = this.label;
            this.generator.gera('', 'JMP', this.label, '');
            this.label += 1;
            flag = 1;
            while (token.symbol === 'sprocedimento' || token.symbol === 'sfuncao') {

                if (token.symbol === 'sprocedimento') {
                    token = this.analyzeProcDeclaration(token)

                }
                else {
                    token = this.analyzeFuncDeclaration(token)
                }
                if (token.symbol === 'sponto_virgula') {
                    token = this.lexic.doLexic()
                }
                else {
                    throw new Error.Error("Erro -> Esperava ;", token.line).show()
                }
                
            }
            if (flag == 1) this.generator.gera(auxrot, null, '', ''); // generator

            
        }

        return token
    }

    analyzeTerm(token) {

        token = this.analyzeFactor(token)

        while (token.symbol === 'smult' || token.symbol === 'sdiv' || token.symbol === 'se') {
            this.expression.push(token.lexem)
            token = this.lexic.doLexic()
            token = this.analyzeFactor(token)
        }
        return token
    }

    analyzeType(token) {
        if (token.symbol !== 'sinteiro' && token.symbol !== 'sbooleano') {
            throw new Error.Error("Erro -> Esperava tipos", token.line).show()
        }
        else {
            this.symbolTable.inserirTipo(token.lexem)
            return token = this.lexic.doLexic()
        }
    }

    analyzeWhile(token, isIf) {
        let auxrot1 = this.label, auxrot2; // semantico
        this.generator.gera(auxrot1, null, '', '') // generator semantico
        this.label += 1; // semantico
        token = this.lexic.doLexic()
        this.expression = new Array();
        token = this.analyzeExpression(token)
        try {
            this.expressionType = new Semantic.Semantic().verifyType(this.expression, this.symbolTable)
        }
        catch (error) {
            error.setLine(token.line);
            throw error.show();
        }
        if (this.expressionType.pop() !== 'B') {
            throw new Error.Error('Error -> Esperava expressao booleana', token.line).show()
        }

        this.geraExpress(this.expression)

        if (token.symbol === 'sfaca') {
            auxrot2 = this.label; // semantico
            this.generator.gera('', 'JMPF', this.label, '') // generator
            this.label += 1; // semantico
            token = this.lexic.doLexic()
            token = this.analyzeSimpleCommand(token, isIf)
            this.generator.gera('', 'JMP', auxrot1, '') // generator
            this.generator.gera(auxrot2, null, '', '') // generator
        }
        else {
            throw new Error.Error("Erro -> esperava faca", token.line).show()
        }

        return token
    }

    analyzeWrite(token) {
        token = this.lexic.doLexic()
        if (token.symbol === 'sabre_parenteses') {
            token = this.lexic.doLexic()
            if (token.symbol === 'sidentificador') {
                var variable = this.symbolTable.pesquisar(token.lexem, this.scope);
                if (variable) {
                    
                    if(variable instanceof SymbolProc.SymbolProc)
                    {
                        
                        if(variable.type !== 'inteiro' && variable.type !== 'booleano')
                        throw new Error.Error('Error -> Esperava funcao', token.line).show()
                        this.generator.gera('', 'CALL', variable.label, ''); // Generator
                    }
                    else
                    {
                        this.generator.gera('', 'LDV', variable.memPos, ''); // Generator
                    }
                    this.generator.gera('', 'PRN', '', ''); // Generator
                    if (!(variable instanceof SymbolVar.SymbolVar) && !(variable instanceof SymbolProc.SymbolProc)) {
                        throw new Error.Error('Error -> Esperava variavel', token.line).show()
                    }
                    token = this.lexic.doLexic()
                    if (token.symbol === 'sfecha_parenteses') {
                        token = this.lexic.doLexic()
                    }
                    else {
                        throw new Error.Error("Erro -> Esperava )", token.line).show()
                    }
                }
                else {
                    throw new Error.Error("Erro -> Variavel nao declarada", token.line).show()
                }
            } else {
                throw new Error.Error("Erro -> Esperava identificador", token.line).show()
            }
        }
        else {
            throw new Error.Error("Erro -> Esperava (", token.line).show()
        }

        return token
    }

    geraExpress(expression) {
        let generateExpress = [];
        let i;
        for (i = 0; i < expression.length; i++) {
            switch (expression[i]) {
                case '-u':
                    this.generator.gera('', 'INV', '', '')
                    break;
                case '+u':
                    break;
                case 'div':
                    this.generator.gera('', 'DIVI', '', '')
                    break;
                case '*':
                    this.generator.gera('', 'MULT', '', '')
                    break;
                case '+':
                    this.generator.gera('', 'ADD', '', '')
                    break;
                case '-':
                    this.generator.gera('', 'SUB', '', '')
                    break;
                case '>':
                    this.generator.gera('', 'CMA', '', '')
                    break;
                case '<':
                    this.generator.gera('', 'CME', '', '')
                    break;
                case '>=':
                    this.generator.gera('', 'CMAQ', '', '')
                    break;
                case '<=':
                    this.generator.gera('', 'CMEQ', '', '')
                    break;
                case '=':
                    this.generator.gera('', 'CEQ', '', '')
                    break;
                case '!=':
                    this.generator.gera('', 'CDIF', '', '')
                    break;
                case 'e':
                    this.generator.gera('', 'AND', '', '')
                    break;
                case 'ou':
                    this.generator.gera('', 'OR', '', '')
                    break;
                case 'nao':
                    this.generator.gera('', 'NEG', '', '')
                    break;
                case 'verdadeiro':
                    this.generator.gera('', 'LDC', '1', '')
                    break;
                case 'falso':
                    this.generator.gera('', 'LDC', '0', '')
                    break;
                default:
                    if (Number.isInteger(Number(expression[i]))) this.generator.gera('', 'LDC', expression[i], '');
                    else {
                        var variable = this.symbolTable.pesquisar(expression[i], this.scope);
                        if (variable instanceof SymbolVar.SymbolVar) this.generator.gera('', 'LDV', variable.memPos, '');
                        else this.generator.gera('', 'CALL', variable.label, '');
                    }
                    break;
            }
        }

        return generateExpress;
    }
}

module.exports = { Analyze }