const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (token) => {
    token = this.lexic.doLexic()
    if (token.simbolo === 'sabre_parenteses') {
        token = this.lexic.doLexic()
        if (token.simbolo === 'sidentificador') {
            if (pesquisa(tabela)) {
                token = this.lexic.doLexic()
                if (token.simbolo === 'sfecha_parenteses') {
                    token = this.lexic.doLexic()
                }
                else {
                    //error
                }
            }
            else {
                //error
            }
        } else {
            //error
        }
    }
    else {
        //error
    }

}
