const treatsDigit = require('../treats/treatsDigit')
const treatsIdentificator = require('../treats/treatsIdentificator')
const treatsAssignment = require('../treats/treatsAssignment')
const treatsPunctuation = require('../treats/treatsPunctuation')
const treatsRelational = require('../treats/treatsRelational')

class Treats{

    constructor(){
        this.character = null;
    }

    treatsDigit = treatsDigit;

    treatsIdentificator = treatsIdentificator;

    treatsAssignment = treatsAssignment;

    treatsPunctuation = treatsPunctuation;

    treatsRelational = treatsRelational;

    getCharacter(){
        return this.caracter;
    }
    
}

module.exports = {Treats}