class Semantic{
    constructor() {
        this.pilha = new Array;
    }

    generateCode(){

    }

    posFixa(exp){
        var result = '';
        var length = exp.length;

        var aux = this.pilha.pop();

        for(var i = 0; i < length; i++)
        {
            
            if(this.priority(exp[i]) === null)
            {
                result += exp[i];
            }
            else
            {   
                aux = this.pilha.pop();
                if(exp[i] === ')')
                {
                    do
                    {
                        result += aux;
                        aux = this.pilha.pop();
                    }while(aux !== '(')
                            
                }
                else
                {
                    if(this.priority(exp[i]) >= this.priority(aux) && aux != undefined
                    && this.priority(aux)!= 0)
                    {
                        while(this.priority(exp[i]) >= this.priority(aux) && aux != undefined
                        && this.priority(aux)!= 0)
                        {
                            result += aux;
                            aux = this.pilha.pop();
                        }
                        if(aux != undefined)
                        {
                            this.pilha.push(aux);
                        }
                        this.pilha.push(exp[i]);
                        
                    }
                    else
                    {
                        if(aux != undefined)
                        {
                            this.pilha.push(aux);
                        }
                        this.pilha.push(exp[i]);
                    }
                    
                }
                    
            }
            console.log(this.pilha)
        }

        while(this.pilha.length > 0)
        {
            result += this.pilha.pop();
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
            case '-u':
                return 1;
            case '+u':
                return 1;
            case 'div':
                return 2;
            case '*':
                return 2;
            case '+':
                return 3;
            case '-':
                return 3;
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