const Lexic = require('./Lexic');
const SymbolProc = require('../models/SymbolProc');
const SymbolVar = require('../models/SymbolVar');
const Semantic = require('../models/Semantic');

class Analyze {
    constructor(symbolTable) {
        this.lexic = Lexic;
        this.scope = 'programa';
        this.symbolTable = symbolTable;
        this.expression = new Array();
        this.expressionType = '';
        this.doPosFixa = 0;
        this.actualFunction = {
            lexem : null,
            returned : false,

        }
    }


    analyzeAssignment(token,variable)///////////////////////////////
    {
        if(variable === null)
        {
            throw 'Error -> Variavel nao declarada'
        }
        else
        {

        }
        token = this.lexic.doLexic()
        this.expression = new Array();
        token = this.analyzeExpression(token)
        this.expressionType = new Semantic.Semantic().verifyType(this.expression,this.symbolTable)

        if(variable)
        if(variable.type === 'inteiro')
        {
            if(this.expressionType.pop() !== 'I')
            {
                throw 'Error -> Variavel do tipo inteiro'
            }
        }
        else
        {
            if(this.expressionType.pop() !== 'B')
            {
                throw 'Error -> Variavel do tipo booleano'
            }
        }

        this.symbolTable.pesquisar(token.lexem,this.scope)

        return token
    }
    analyzeAtribCallProc(token) {
        var variable = this.symbolTable.pesquisar(token.lexem, this.scope)
        if (variable !== null) {
            var tokenAux = token;
            token = this.analyzeReturnF(token)
            if(tokenAux === token)
            {
            token = this.lexic.doLexic()
                if (token.symbol === 'satribuicao') {
                token = this.analyzeAssignment(token,variable)
                
                }
                else {
                
                    token = this.analyzeCallProc(token)
                }
            }
        }
        else {
            throw 'Error -> Declaracao nao existente'
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
            console.log('analyzeCallFunc');
        }
        else {
            throw "Erro -> Chamada de funcao"
        }
        token = this.lexic.doLexic()
        return token
    }

    analyzeCallProc(token)////////////////////////////////////////////////////
    {
        return token
    }

    analyzeCommands(token) {
        console.log('cheguei com')
        console.log(token)
        if (token.symbol === 'sinicio') {
            token = this.lexic.doLexic()
            token = this.analyzeSimpleCommand(token)
            while (token.symbol !== 'sfim') {
                if (token.symbol === 'sponto_virgula') {
                    token = this.lexic.doLexic()
                    if (token.symbol !== 'sfim') {
                        token = this.analyzeSimpleCommand(token)
                    }
                }
                else {
                    throw "Erro -> Esperava ;"
                }
            }
            token = this.lexic.doLexic()
        }
        else {
            throw "Erro -> Esperava inicio"
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
        if(this.doPosFixa === 0)
        {
            console.log(this.expression)
            this.expression = new Semantic.Semantic().posFixa(this.expression)
            console.log(this.expression)
    
            //this.expression = new Array()
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
                throw "Erro -> Nao declarado"
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
            throw "Erro -> Esperava um fator"
        }

        return token

    }

    analyzeReturnF(token)
    {
        if(this.actualFunction.returned !== true)
        {
            var variable = this.symbolTable.pesquisar(this.actualFunction.lexem, this.scope)
            if(this.actualFunction)
            {
                if(token.lexem === this.actualFunction.lexem)
                {
                    token = this.lexic.doLexic()
                    token = this.analyzeAssignment(token, variable)
                    this.actualFunction.returned=true;
                }
            }
        }
        
        
        return token;
    }

    analyzeFuncDeclaration(token) {
        
        token = this.lexic.doLexic()

        if (token.symbol === 'sidentificador') {
            this.scope = token.lexem;
            if (!this.symbolTable.pesquisar(token.lexem, this.scope)) {
                this.actualFunction.lexem = token.lexem;
                this.symbolTable.inserir('proc', token.lexem, this.scope)
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
                        throw "Erro -> Erro no tipo"
                    }

                }
                else {
                    throw "Erro -> Esperava :"
                }

            }
            else {
                throw "Erro -> Nome de funcao existente"
            }
            this.symbolTable.desempilhar()
        }

        if(this.actualFunction.returned === false)
        {
            throw 'Error -> Funcao sem retorno'
        }
        this.actualFunction = {
            lexem : null,
            returned : false
        };

        return token
    }

    analyzeIf(token) {
        token = this.lexic.doLexic()
        this.expression = new Array();
        token = this.analyzeExpression(token)
        this.expressionType = new Semantic.Semantic().verifyType(this.expression,this.symbolTable)
        if ( this.expressionType.pop() !== 'B')
        {
            throw 'Error -> Esperava expressao booleana'
        }
        if (token.symbol === 'sentao') {
            token = this.lexic.doLexic()

            token = this.analyzeSimpleCommand(token)

            if (token.symbol === 'ssenao') {
                token = this.lexic.doLexic()
                token = this.analyzeSimpleCommand(token)
            }
        }
        else {
            throw 'Erro -> Esperava então'
        }
        return token
    }

    analyzeProcDeclaration(token) {
        token = this.lexic.doLexic()

        if (token.symbol === 'sidentificador') {
            this.scope = token.lexem;
            if (!this.symbolTable.pesquisar(token.lexem, this.scope)) {

                this.symbolTable.inserir('proc', token.lexem, this.scope)

                token = this.lexic.doLexic()
                if (token.symbol === 'sponto_virgula') {

                    token = this.analyzeBlock(token)

                }
                else {
                    throw "Erro -> Esperava ;"
                }
            }
            else {
                throw "Erro -> Nome de procedimento existente"
            }
            this.symbolTable.desempilhar()
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
                    if(!(variable instanceof SymbolVar.SymbolVar))
                    {
                        throw 'Error -> Esperava variavel'
                    }
                    token = this.lexic.doLexic()
                    if (token.symbol === 'sfecha_parenteses') {
                        token = this.lexic.doLexic()
                    }
                    else {
                        throw "Erro -> Esperava )"
                    }
                }
                else {
                    throw "Erro -> Variavel nao declarada"
                }
            } else {
                throw "Erro -> Esperava identificador"
            }
        }
        else {
            throw "Erro -> Esperava ("
        }

        return token
    }

    analyzeSimpleCommand(token) {
        switch (token.symbol) {
            case 'sidentificador':
                token = this.analyzeAtribCallProc(token)
                break;
            case 'sse':
                token = this.analyzeIf(token)
                break;
            case 'senquanto':
                token = this.analyzeWhile(token)
                break;
            case 'sleia':
                token = this.analyzeRead(token)
                break;
            case 'sescreva':
                token = this.analyzeWrite(token)
                break;
            default:
                token = this.analyzeCommands(token)
                break;
        }

        return token
    }

    analyzeSimpleExpression(token) {
        
        if (token.symbol === 'smais' || token.symbol === 'smenos') {
            
            if(token.symbol === 'smais')
            {
                token.lexem = '+u'
            }
            else
            {
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
                        throw "Erro -> Esperava ;"
                    }

                }
            }
            else {
                throw "Erro -> Esperava identificador"
            }
        }

        return token

    }

    analyzeVariables(token) {
        do {
            if (token.symbol === 'sidentificador') {
                if (!this.symbolTable.pesquisarDupli(token.lexem)) {
                    this.symbolTable.inserir('var', token.lexem, this.scope)
                    token = this.lexic.doLexic()
                    if (token.symbol === 'svirgula' || token.symbol === 'sdoispontos') {
                        if (token.symbol === 'svirgula') {
                            token = this.lexic.doLexic()
                            if (token.symbol === 'sdoispontos') {
                                throw "Erro -> : nao esperado"
                            }
                        }
                    }
                    else {
                        throw "Erro -> Esperava , ou :"
                    }
                }
                else {
                    throw "Erro -> Variavel com nome existente"
                }
            }
            else {
                throw "Erro -> Esperava identificador"
            }
        }
        while (token.symbol !== 'sdoispontos')
        token = this.lexic.doLexic()
        return this.analyzeType(token)
    }

    analyzeSubRotine(token) {
        if (token.symbol === 'sprocedimento' || token.symbol === 'sfuncao') {
            //codigo vermelho
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
                    throw "Erro -> Esperava ; [analyzeSubRotine]"
                }
            }
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
            throw "Erro -> Esperava tipos"
        }
        else {
            this.symbolTable.inserirTipo(token.lexem)
            return token = this.lexic.doLexic()
        }
    }

    analyzeWhile(token) {
        token = this.lexic.doLexic()
        this.expression = new Array();
        token = this.analyzeExpression(token)
        this.expressionType = new Semantic.Semantic().verifyType(this.expression,this.symbolTable)
        if ( this.expressionType.pop() !== 'B')
        {
            throw 'Error -> Esperava expressao booleana'
        }
        if (token.symbol === 'sfaca') {
            token = this.lexic.doLexic()
            token = this.analyzeSimpleCommand(token)
        }
        else {
            throw "Erro -> esperava faca"
        }

        return token
    }

    analyzeWrite(token) {
        token = this.lexic.doLexic()
        if (token.symbol === 'sabre_parenteses') {
            token = this.lexic.doLexic()
            if (token.symbol === 'sidentificador') {
                var variable = this.symbolTable.pesquisar(token.lexem);
                if (variable) {
                    if(!(variable instanceof SymbolVar.SymbolVar))
                    {
                        throw 'Error -> Esperava variavel'
                    }
                    token = this.lexic.doLexic()
                    if (token.symbol === 'sfecha_parenteses') {
                        token = this.lexic.doLexic()
                    }
                    else {
                        throw "Erro -> Esperava )"
                    }
                }
                else {
                    throw "Erro -> Variavel nao declarada"
                }
            } else {
                throw "Erro -> Esperava identificador"
            }
        }
        else {
            throw "Erro -> Esperava ("
        }

        return token
    }
}
module.exports = { Analyze }