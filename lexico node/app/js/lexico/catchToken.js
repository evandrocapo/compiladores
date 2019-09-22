const treatsModel = require('./treats/Treats')
const tokenModel = require('../../../models/Token');

module.exports = (caracter, program) => {

        let treats = new treatsModel.Treats()

        if(caracter.match(/\d+/g))
        {
            return treats.treatsDigit(caracter,program);
        }
        else if(caracter.match(/^[A-Za-z]+$/))
        {
            // token.setToken() = Treats.treatsIdentificator(caracter);
        }
        else if(caracter === ':')
        {
            // token.setToken() = Treats.treatsAssignment(caracter);
        }
        else if(caracter === '+' || caracter === '-' || caracter ==='*')
        {
            // token.setToken() = Treats.treatsArithmetic(caracter);
        }
        else if(caracter === '<' || caracter === '>' || caracter ==='=')
        {
            // token.setToken() = Treats.treatsRelational(caracter);
        }
        else if(caracter === ';' || caracter === ',' || caracter ==='(' || caracter === ')' || caracter ==='.')
        {
            // token.setToken() = Treats.treatsPunctuation(caracter);
        }
        else
        {
            throw "error no catchToken"
        }

        return 0;
    }