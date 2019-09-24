const treatsModel = require('./treats/Treats')
const tokenModel = require('../../../models/Token');

module.exports = (caracter, program, linha) => {

        let treats = new treatsModel.Treats()

        if(caracter.match(/\d+/g))
        {
            return treats.treatsDigit(caracter,program, linha);
                   
        }
        else if(caracter.match(/^[A-Za-z]+$/))
        {
            return treats.treatsIdentificator(caracter,program, linha);
        }
        else if(caracter === ':')
        {
            return treats.treatsAssignment(caracter,program, linha);
        }
        else if(caracter === '+' || caracter === '-' || caracter ==='*')
        {
            return treats.treatsArithmetic(caracter,program, linha);
        }
        else if(caracter === '<' || caracter === '>' || caracter ==='=')
        {
            return treats.treatsRelational(caracter,program, linha);
        }
        else if(caracter === ';' || caracter === ',' || caracter ==='(' || caracter === ')' || caracter ==='.')
        {
            return treats.treatsPunctuation(caracter,program, linha);
        }
        else
        {
            throw "error no Token: " + caracter + "\n" + "linha: " + linha;
        }
    }