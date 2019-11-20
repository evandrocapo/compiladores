var fs = require('fs');

class Generator {

    constructor() {
        this.codigo = new Array;
    }

    gera(label, command, param1, param2) {

        if (label) {
            this.codigo.push("L" + label + " " + "NULL");
        }
        else {
            switch (command) {
                case 'JMP':
                    label_ = "L" + param1;
                    this.codigo.push(command + " " + label_) // JMP L1
                    break;
                case 'JMPF':
                    label_ = "L" + param1;
                    this.codigo.push(command + " " + label_) // JMP L1
                    break;
                case 'START':
                    this.codigo.push(command)
                    break;
                case 'ALLOC':
                    this.codigo.push(command + " " + param1 + "," + param2); // ALLOC m n
                    break;
                case 'DALLOC':
                    this.codigo.push(command + " " + param1 + "," + param2); // DALLOC m n
                    break;
                case 'CALL':
                    this.codigo.push(command + " " + param1); // CALL p
                    break;
                case 'RETURN':
                    this.codigo.push(command); // RETURN
                    break;
                case 'RETURNF':
                    this.codigo.push(command + " " + param1); // RETURNF
                    break;
                case 'STR':
                    this.codigo.push(command + " " + param1); // STR A
                    break;
                case 'RD':
                    this.codigo.push(command + " " + param1); // RD não tem parametros porém precisamos ler do teclado algo.
                    break;
                case 'PRN':
                    this.codigo.push(command); // PRN
                    break;
                case 'HLT':
                    this.codigo.push(command); // HLT
                    break;
                case 'LDC':
                    this.codigo.push(command + " " + param1); // LDC k
                    break;
                case 'LDV':
                    this.codigo.push(command + " " + param1) // LDV n
                    break;
                case 'ADD':
                    this.codigo.push(command); // ADD
                    break;
                case 'SUB':
                    this.codigo.push(command); // SUB
                    break;
                case 'MULT':
                    this.codigo.push(command); // MULT
                    break;
                case 'DIVI':
                    this.codigo.push(command); // DIVI
                    break;
                case 'INV':
                    this.codigo.push(command); // INV
                    break;
                case 'AND':
                    this.codigo.push(command);
                    break;
                case 'OR':
                    this.codigo.push(command);
                    break;
                case 'NEG':
                    this.codigo.push(command);
                    break;
                case 'CME':
                    this.codigo.push(command);
                    break;
                case 'CMA':
                    this.codigo.push(command);
                    break;
                case 'CEQ':
                    this.codigo.push(command);
                    break;
                case 'CDIF':
                    this.codigo.push(command);
                    break;
                case 'CMEQ':
                    this.codigo.push(command);
                    break;
                case 'CMAQ':
                    this.codigo.push(command);
                    break;
            }
        }
    }

    getCodigo() {
        return this.codigo;
    }

    generateCode() {
        try { fs.writeFileSync('code.obj', this.codigo, 'utf-8'); }
        catch (e) { alert('Impossivel salvar !'); }
    }

}

module.exports = { Generator }