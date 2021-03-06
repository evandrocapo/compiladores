const Error = require('./Error');

class Semantic{
    constructor() {
        this.pilha = new Array;
    }

    generateCode(){

    }

    posFixa(exp){
        var result = new Array();
        var length = exp.length;

        var aux = this.pilha.pop();

        for(var i = 0; i < length; i++)
        {
            
            if(this.priority(exp[i]) === null)
            {
                result.push(exp[i]);
            }
            else
            {   
                aux = this.pilha.pop();
                if(exp[i] === ')')
                {
                    while(aux !== '(')
                    {
                        result.push(aux);
                        aux = this.pilha.pop();
                        
                    }
                            
                }
                else
                {
                    if(this.priority(exp[i]) >= this.priority(aux) && aux != undefined
                    && this.priority(aux)!= 0)
                    {
                        while(this.priority(exp[i]) >= this.priority(aux) && aux != undefined
                        && this.priority(aux)!= 0)
                        {
                            result.push(aux);
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
            result.push(this.pilha.pop());
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
            case 'nao':
                return 1;
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

    verifyType(expression, symbolTable, scope)
    {
        var symbol;

        var exp = new Array();

        for(var i=0;i<expression.length;i++)
        {
            exp.push(expression[i]);
        }

        

        for(var i=0;i<exp.length;i++)
        {
            symbol = symbolTable.pesquisar(exp[i],scope)

            if(symbol != null)
            {
                if(symbol.type === 'inteiro')
                {
                    exp[i] = 'I'
                }
                else if (symbol.type === 'booleano')
                {
                    exp[i] = 'B'
                }
            }
            else
            {
                if(exp[i] === 'verdadeiro' || exp[i] === 'falso')
                {
                    exp[i] = 'B'
                }
                else if(Number.isInteger(Number(exp[i])))
                {
                    exp[i] = 'I'
                }
            }
        }
        
        
        var iterator = 0;
        var result = null;

        do
        {
            if(exp[iterator] === '-u' || exp[iterator] === '+u' || exp[iterator] === 'nao'
            || exp[iterator] === '*'|| exp[iterator] === 'div' || exp[iterator] === '+' 
            || exp[iterator] === '>' || exp[iterator] === '<' || exp[iterator] === '>='
            || exp[iterator] === '<=' || exp[iterator] === '=' || exp[iterator] === '!=' 
            || exp[iterator] === 'e' || exp[iterator] === 'ou' || exp[iterator] === '-')
            {

                result = this.verifyCompatibility(exp,iterator)
                if(result === null)
                {
                    throw new Error.Error('Error -> Incompatibilidade de tipos na expressao',null)
                }
                iterator = result;
            }
            else
            {
                iterator++;
            }
            
        }while(exp.length != 1)
        
        return exp;    

    }

    verifyCompatibility(exp,i)
    {
        var factor = exp[i];

        if(factor === '-u' || factor === '+u')
        {
            if(exp[i-1] === 'I')
            {
                exp[i] = 'I'
                exp.splice(i-1,1)
                return i-1
            }
            return null
        }
        else if(factor === 'nao')
        {
            if(exp[i-1] === 'B')
            {
                exp[i] = 'B'
                exp.splice(i-1,1)
                return i-1
            }
            return null
        }
        else if(factor === '*' || factor === 'div' || factor === '+' || factor === '-')
        {
            if(exp[i-1] === 'I' && exp[i-2] === 'I')
            {
                exp[i] = 'I'
                exp.splice(i-2,2)
                return i-2
            }
            return null
        }
        else if(factor === 'e' || factor === 'ou')
        {
            if(exp[i-1] === 'B' && exp[i-2] === 'B')
            {
                exp[i] = 'B'
                exp.splice(i-2,2)
                return i-2
            }
            return null
        }
        else
        {
            if(exp[i-1] === 'I' && exp[i-2] === 'I')
            {
                exp[i] = 'B'
                exp.splice(i-2,2)
                return i-2
            }
            return null
        }
    }
}

module.exports = {Semantic}