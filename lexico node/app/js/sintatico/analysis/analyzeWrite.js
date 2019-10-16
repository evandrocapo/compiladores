const tokenModel = require('../../../../models/Token');

//Imports
module.exports = (token) => {
    token = lexic(token)
    if (token.simbolo === 'sabre_parenteses') {
        token = lexic(token)
        if (token.simbolo === 'sidentificador') {
            if (pesquisa(tabela)) {
                token = lexic(token)
                if (token.simbolo === 'sfecha_parenteses') {
                    token = lexic(token)
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
