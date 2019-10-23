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
        this.token = this.lexic.doLexic()
        if (this.token.symbol === 'sprograma') {
            this.token = this.lexic.doLexic()
            if(this.token.symbol === 'sidentificador'){
            //insereTabela(tabela);
            this.token = this.lexic.doLexic()
                if(this.token.symbol === 'sponto_virgula')
                {
                    Analyze.main(this.token)
                    if(this.token.symbol === 'sponto')
                    {
                        if(this.lexic.isFileEnd)
                        {
                            //success
                            console.log('compilou doido')
                        }
                        else
                        {
                           throw "error"
                        }
                    }
                    else
                    {
                       throw "error"
                    }
                }
                else
                {
                   throw "error esperava um ponto e virgula caralho"
                }
            }
            else{
               throw "error"
            }
        }
        else
        {
           throw "error"
        }
    }
}

module.exports = { Syntatic }