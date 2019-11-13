const Lexic = require('./Lexic');

class Analyze {
    constructor(symbolTable) { 
        this.lexic = Lexic;
        this.scope = 'programa';
        this.symbolTable = symbolTable;
    }


    analyzeAssignment(token)///////////////////////////////
    {
        token = this.lexic.doLexic()
        token = this.analyzeExpression(token)
    
        return token
    }
    analyzeAtribCallProc(token)
    {
        token = this.lexic.doLexic()
        if(token.symbol === 'satribuicao')
        {
          token = this.analyzeAssignment(token)
        }
        else
        {
          token = this.analyzeCallProc(token)
        }
        return token
    }
    analyzeBlock(token)
    {
        token = this.lexic.doLexic()
        token = this.analyzeStepVariables(token)
        token = this.analyzeSubRotine(token)
        token = this.analyzeCommands(token)
        return token;
    }
    analyzeCallFunc(token)/////////////////////////////////////////////////
    {
        if(token.symbol === 'sidentificador')
        {
             //inserir na tabela
             console.log('analyzeCallFunc');
        }
        else
        {
           throw "Erro -> Chamada de funcao"
        }
        token = this.lexic.doLexic()
        return token
    }

    analyzeCallProc(token)////////////////////////////////////////////////////
    {
        if(token.symbol === 'sponto_virgula')
        {
             //inserir na tabela
        }
        else
        {
            //console.log(token)
           //throw "Erro -> Chamada de procedimento"
        }
        
        return token
    }

    analyzeCommands(token)
    {
        if(token.symbol === 'sinicio')
        {
             token = this.lexic.doLexic()
             token = this.analyzeSimpleCommand(token)
             while(token.symbol !== 'sfim')
             {
                 if(token.symbol === 'sponto_virgula')
                 {
                     token = this.lexic.doLexic()
                     if(token.symbol !== 'sfim')
                     {
                         token = this.analyzeSimpleCommand(token)
                     }
                 }
                 else
                 {
                    throw "Erro -> Esperava ;"
                 }
             }
             token = this.lexic.doLexic()
        }
        else
        {
           throw "Erro -> Esperava inicio"
        }
     
        return token
    }

    analyzeExpression(token)
    {
        token = this.analyzeSimpleExpression(token)
        if(token.symbol === 'smaior' || token.symbol === 'sig' || token.symbol === 'smenor' || token.symbol === 'smenorig' || token.symbol === 'sdif' || token.symbol === 'smaiorig' )
        {
             this.lexic = this.lexic;
             token = this.lexic.doLexic()
             token = this.analyzeSimpleExpression(token)
        }
        return token;
    }

    analyzeFactor(token)
    {
        var tabela = null
        
        if(token.symbol === 'sidentificador')
        {
            tabela = this.symbolTable.pesquisar(token.lexem, this.scope)
            console.log(tabela)
            if(tabela)
            {
                if(tabela.symbol === 'sinteiro' || tabela.symbol === 'sbooleano')
                {
                    token = this.analyzeCallFunc(token)
                    token = this.lexic.doLexic()
                }
                else
                {
                    token = this.this.lexic.doLexic()
                }
            }
            else
            {
                throw "Erro -> Nao declarado"
            }
        }
        else if(token.symbol ===  'snumero')
        {
            token = this.lexic.doLexic()
        }
        else if (token.symbol === 'snao')
        {
            token = this.lexic.doLexic()
            token = this.analyzeFactor(token)
        }
        else if (token.symbol === 'sabre_parenteses')
        {
            token = this.lexic.doLexic()

            token = this.analyzeExpression(token)
            
            if(token.symbol === 'sfecha_parenteses')
            {
                token = this.lexic.doLexic()
            }
            else
            {
               'Erro -> Esperava fecha parenteses'
            }
        }
        else if (token.lexem === 'verdadeiro' || token.lexem === 'falso')
        {
            token = this.lexic.doLexic()
        }
        else
        {
           throw "Erro -> Esperava um fator"
        }
    
        return token
       
    }

    analyzeFuncDeclaration(token)
    {
        token = this.lexic.doLexic()
        
     
        if( token.symbol === 'sidentificador')
        {
            this.scope = token.lexem;
             if(!this.symbolTable.pesquisar(token.lexem, this.scope)){
                
                this.symbolTable.inserir('proc', token.lexem, this.scope)
                 token = this.lexic.doLexic()
                 if( token.symbol === 'sdoispontos')
                 {
                     token = this.lexic.doLexic()
                     if(token.symbol === 'sinteiro' || token.symbol === 'sbooleano')
                     {
                         if(token.symbol === 'sinteiro')
                         {
                            this.symbolTable.inserirTipo(token.lexem)
                         }
                         else
                         {
                            this.symbolTable.inserirTipo(token.lexem)
                         }
                         token = this.lexic.doLexic()
                         if(token.symbol === 'sponto_virgula')
                         {
                             token =  this.analyzeBlock(token)
                         }
                     }
                     else
                     {
                        throw "Erro -> Erro no tipo"
                     }
     
                 }
                 else
                 {
                    throw "Erro -> Esperava :"
                 }
     
            }
            else
            {
                throw "Erro -> Nome de funcao existente"
            }
            this.symbolTable.desempilhar()
        }
     
        return token
    }

    analyzeIf(token)
    {
        token = this.lexic.doLexic()
        token = this.analyzeExpression(token)
        if (token.symbol === 'sentao')
        {
            token = this.lexic.doLexic()

            token = this.analyzeSimpleCommand(token)

            if(token.symbol === 'ssenao')
            {
             token = this.lexic.doLexic()
             token = this.analyzeSimpleCommand(token)  
            }
        }
        else
        {
            throw 'Erro -> Esperava então'
        }
        return token
    }

    analyzeProcDeclaration(token)
    {
        token = this.lexic.doLexic()
    
        if (token.symbol === 'sidentificador') {
            this.scope = token.lexem;
             if(!this.symbolTable.pesquisar(token.lexem, this.scope)){
                
                this.symbolTable.inserir('proc', token.lexem, this.scope)
             
                token = this.lexic.doLexic()
                if (token.symbol === 'sponto_virgula') {

                    token =  this.analyzeBlock(token)

                }
                else
                {
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

    analyzeRead(token)
    {
        token = this.lexic.doLexic()
        if (token.symbol === 'sabre_parenteses') {
            token = this.lexic.doLexic()
            if (token.symbol === 'sidentificador') {
                if (this.symbolTable.pesquisar(token.lexem, this.scope)) {
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

    analyzeSimpleCommand(token)
    {
        switch(token.symbol)
        {
            case 'sidentificador':
             token =  this.analyzeAtribCallProc(token)
                break;
             case 'sse':
                 token =  this.analyzeIf(token)
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

    analyzeSimpleExpression(token)
    {
        if(token.symbol === 'smais' || token.symbol === 'smenos')
        {
            token = this.lexic.doLexic()
         }
            token = this.analyzeTerm(token)
            while(token.symbol === 'smais' || token.symbol === 'smenos' || token.symbol === 'sou')
            {
             token = this.lexic.doLexic()
             token = this.analyzeTerm(token)
            }
     
        return token
    }

    analyzeStepVariables(token)
    {
        if(token.symbol === 'svar')
        {
            token = this.lexic.doLexic()
            if(token.symbol === 'sidentificador')
            {
                while (token.symbol === 'sidentificador')
                {
                     token = this.analyzeVariables(token)
                     if(token.symbol === 'sponto_virgula')
                     {
                         token = this.lexic.doLexic()
                     }
                     else
                     {
                         throw "Erro -> Esperava ;"
                     }
                     
                }
            }
            else
            {
             throw "Erro -> Esperava identificador"
            }
        }
     
        return token
        
    }

    analyzeVariables(token)
    {
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

    analyzeSubRotine(token)
    {
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

    analyzeTerm(token)
    {    token = this.analyzeFactor(token)

        while(token.symbol === 'smult' || token.symbol === 'sdiv' || token.symbol === 'se')
        {
            token = this.lexic.doLexic()
            token = this.analyzeFactor(token)
        }
       return token
    }

    analyzeType(token)
    {
        if(token.symbol !== 'sinteiro' && token.symbol !== 'sbooleano')
        {
         throw "Erro -> Esperava tipos"
        }
        else
        {
            this.symbolTable.inserirTipo(token.lexem)
            return token = this.lexic.doLexic()
        }
    }

    analyzeWhile(token)
    {
        token = this.lexic.doLexic()
        token = this.analyzeExpression(token)
        if(token.symbol === 'sfaca')
        {
             token = this.lexic.doLexic()
             token = this.analyzeSimpleCommand(token)
        }
        else
        {
         throw "Erro -> esperava faca"
        }
     
        return token
    }

    analyzeWrite(token)
    {
        token = this.lexic.doLexic()
        if (token.symbol === 'sabre_parenteses') {
            token = this.lexic.doLexic()
            if (token.symbol === 'sidentificador') {
                if (this.symbolTable.pesquisa(token.lexem)) {
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