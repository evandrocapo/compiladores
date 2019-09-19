export default class Error{

    constructor(){
        super();

        this.type = "";
        this.line = 0;
    }

    getLexem = () => {
        return this.type;
    }

    getLine = () => {
        return this.line;
    }

    setType = (type) => {
        this.type = type;
    }

    setLine = (line) => {
        this.line = line;
    }
    
}