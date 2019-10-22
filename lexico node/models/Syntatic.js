const catchToken = require('../app/js/lexico/catchToken')
const tokenModel = require('./Token');
const Lexic = require('../models/Lexic');
const Analyze = require('../models/Analyze');

class Syntatic {

    constructor() {
        this.lexic = Lexic.getInstance();
        this.token = null;
    }

    main() {
        this.token = this.lexic.doLexic()
        if (this.token.simbolo === 'sprograma') {
            if(this.token.simbolo === 'sidentificador'){
            //insereTabela(tabela);
            this.token = this.lexic.doLexic()
                if(this.token.simbolo === 'spontovirgula')
                {
                    Analyze.main(this.token)
                    if(this.token.simbolo === 'sponto')
                    {
                        if(this.lexic.isFileEnd)
                        {
                            //success
                            console.log('compilou doido')
                        }
                        else
                        {
                            //error
                        }
                    }
                    else
                    {
                        //error
                    }
                }
                else
                {
                    //error
                }
            }
            else{
                //error
            }
        }
        else
        {
            //error
        }
    }
}

module.exports = { Syntatic }