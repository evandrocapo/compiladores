class Util {
    constructor (){
        super();
        var linha = 0;
    }

    read(program, i) {
        while(program[i] == "/n" || program[i] == "/r" ){
            i++;
            linha++;
        } 
        return program[i];
    }
}

module.exports = {Util}