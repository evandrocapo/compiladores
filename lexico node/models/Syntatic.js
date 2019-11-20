const catchToken = require('../app/js/lexico/catchToken')
const tokenModel = require('./Token');
const Lexic = require('../models/Lexic');
const Analyze = require('../models/Analyze');
const SymbolTable = require('../models/SymbolTable');
const Semantic = require('../models/Semantic');
const Generator = require('../models/Generator');

class Syntatic {

    constructor() {
        this.lexic = Lexic;
        this.semantic = Semantic;
        this.symbolTable = new SymbolTable.SymbolTable();
        this.generator = new Generator.Generator();
        this.token = null;
        this.pilha = [];
    }

    main() {
        let analyzer = new Analyze.Analyze(this.symbolTable);
        this.token = this.lexic.doLexic()
        if (this.token.symbol === 'sprograma') {
            this.token = this.lexic.doLexic()
            if(this.token.symbol === 'sidentificador'){
                this.symbolTable.inserir("program", this.token.lexem, this.token.lexem);
                this.token = this.lexic.doLexic()
                if(this.token.symbol === 'sponto_virgula')
                {
                    this.token = analyzer.analyzeBlock(this.token)
                    
                    if(this.token.symbol === 'sponto')
                    {
                        this.token = this.lexic.doLexic()
                        if(this.lexic.isFileEnd)
                        {
                            //success
                            console.log('compilou')
                        }
                        else
                        {
                           throw "Error -> Acabou apos ."
                        }
                    }
                    else
                    {
                       throw "Error -> Esperava ."
                    }
                }
                else
                {
                   throw "Error -> Esperava ;"
                }
            }
            else{
               throw "Error -> Esperava identificador"
            }
        }
        else
        {
            throw "Error -> Esperava programa"
        }
    }
}

module.exports = { Syntatic }