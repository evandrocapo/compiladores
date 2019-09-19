import treatsDigit from './treats/treatsDigit'
import treatsIdentificator from './treats/treatsIdentificator'
import treatsAssignment from './treats/treatsAssignment'
import treatsPunctuation from './treats/treatsPunctuation'
import treatsRelational from './treats/treatsRelational'

export default class Treats{

    constructor(){
        super();

        this.token = new Token();
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