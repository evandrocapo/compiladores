const catchToken = require('../app/js/lexico/catchToken')
const tokenModel = require('./Token');
import Lexic from '../../../../models/Lexic.js';

class Syntatic {

    constructor()
    {
        this.lexic = Lexic.getInstance();
    }

    main() {
        token = this.lexic.doLexic()
        if (token.simbolo === 'sprograma') {
            //insereTabela(tabela);
            token =  this.lexic.doLexic()
            if(token.simbolo === 'spontovirgula')
            {
                analyzeBlock()
                if(token.simbolo === 'sponto')
                {
                    if(isFileEnd)
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
        else
        {
            //error
        }
    }
}

module.exports = { Syntatic }