const treatsDigit = require('../treats/treatsDigit')
const treatsIdentificator = require('../treats/treatsIdentificator')
const treatsAssignment = require('../treats/treatsAssignment')
const treatsPunctuation = require('../treats/treatsPunctuation')
const treatsRelational = require('../treats/treatsRelational')

class Treats{

    constructor(){
        // this.token = new Token();
        this.character = null;
    }

    treatsDigit = (caracter) => treatsDigit;

    treatsIdentificator = (caracter) => treatsIdentificator;

    treatsAssignment = (caracter) => treatsAssignment;

    treatsPunctuation = (caracter) => treatsPunctuation;

    treatsRelational = (caracter) => treatsRelational;

    getCharacter(){
        return this.caracter;
    }
    
}

module.exports = {Treats}