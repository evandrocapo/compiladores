class Semantic{
    constructor() {
        this.pilha = new Array;
    }

    generateCode(){

    }

    posFixa(exp){
        var result = '';
        var length = exp.length;

        for(var i = 0; i< length; i++)
        {
            if(this.priority(exp[i]) === null)
            {
                result += exp[i];
            }
            else
            {
                //do
                //{
                var aux = this.pilha.pop();

                    if(aux)
                    {
                        if(aux === ')')
                        {
                            while((aux = this.pilha.pop()) !== '(')
                            {
                                result += aux;
                            }
                            
                        }
                        else
                        {
                            if(this.priority(aux) >= this.priority(exp[i]) && this.priority(aux) !== 0)
                            {
                                while(this.priority(aux) >= this.priority(exp[i]) && this.priority(aux) !== 0)
                                {
                                    result += this.priority(aux);
                                    aux = this.pilha.pop();
                                }
                                this.pilha.push(exp[i]);
                            }
                            else
                            {
                                this.pilha.push(exp[i]);
                            }
                        }
                       
                    }
               // }while(this.priority(aux) >= this.priority(exp[i]))

            }
        }
        var rest = null;
        while(rest = this.pilha.pop)
        {
            result += rest;
        }

        return result;
    }

    priority(term)
    {
        switch(term)
        {
            case '(':
                return 0;
            case ')':
                return 0;
            case 'div':
                return 1;
            case '*':
                return 1;
            case '+':
                return 2;
            case '-':
                return 2;
            case '>':
                return 4;
            case '<':
                return 4;
            case '>=':
                return 4;
            case '<=':
                return 4;
            case '=':
                return 4;
            case '!=':
                return 4;
            case 'e':
                return 5;
            case 'ou':
                return 6;
            default:
                return null;
            
        }
    }
}

module.exports = {Semantic}