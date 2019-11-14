class Semantic{
    constructor() {
        this.pilha = new Array;
    }

    generateCode(){

    }

    posFixa(exp){
        var result = null;
        var length = exp.length;

        for(var i = 0; i< length; i++)
        {
            if(this.priority(exp[i]) === null)
            {
                result = exp[i];
            }
            else
            {
                //implementar aqui
                //while(this.pilha.pop())
                this.pilha.pop(exp[i]);
            }
        }
        




        return result;
    }

    priority(term)
    {
        switch(term)
        {
            case 'div':
                return 2;
            case '*':
                return 2;
            case '+':
                return 3;
            case '-':
                return 3;
            case '(':
                return 1;
            case ')':
                return 1;
            case 'e':
                return 4;
            case 'ou':
                return 4;
            default:
                return null;
            
        }
    }
}

module.exports = {Semantic}