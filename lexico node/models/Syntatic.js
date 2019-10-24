const catchToken = require('../app/js/lexico/catchToken')
const tokenModel = require('./Token');
const Lexic = require('../models/Lexic');
const Analyze = require('../models/Analyze');

class Syntatic {

    constructor() {
        this.lexic = Lexic;
        this.token = null;
    }

    main() {
        let analyzer = new Analyze.Analyze();
        this.token = this.lexic.doLexic()
        if (this.token.symbol === 'sprograma') {
            this.token = this.lexic.doLexic()
            if(this.token.symbol === 'sidentificador'){
            //insereTabela(tabela);
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
           throw "error"
        }
    }
}

module.exports = { Syntatic }