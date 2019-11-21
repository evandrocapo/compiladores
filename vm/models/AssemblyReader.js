class AssemblyReader {
    constructor() {
        this.i = 0; // linha do codigo
        this.s = 0; // posicao da pilha
        this.m = []; // pilha de memoria
    }

    verify(program) {
        console.log(program);
        var params = program.split(' ');
        if(params.length > 1){
            params = params[1].replace(' ', '');
            params = params.split(',')
        }
        switch (program) {
            case 'JMP':
                this.readJMP(params[1])
                break;
            case 'JMPF':
                this.readJMPF(params[1])
                break;
            case 'START':
                this.readSTART();
                break;
            case 'ALLOC':
                this.readALLOC(params[1],params[2]);
                break;
            case 'DALLOC':
                this.readDALLOC(params[1],params[2]);
                break;
            case 'CALL':
                this.readCALL(params[1]);
                // CALL p
                break;
            case 'RETURN':
                this.readRETURN();
                // RETURN
                break;
            case 'RETURNF':
                this.readRETURNF(params[1]);
                // RETURNF
                break;
            case 'STR':
                this.readSTR(params[1]);
                // STR A
                break;
            case 'RD':
                this.readRD(params[1]);
                // RD não tem parametros porém precisamos ler do teclado algo.
                break;
            case 'PRN':
                this.readPRN();
                // PRN
                break;
            case 'HLT':
                this.readHLT();
                // HLT
                break;
            case 'LDC':
                this.readLDC(params[1]);
                // LDC k
                break;
            case 'LDV':
                this.readLDV(params[1]);
                // LDV n
                break;
            case 'ADD':
                this.readADD();
                // ADD
                break;
            case 'SUB':
                this.readSUB();
                // SUB
                break;
            case 'MULT':
                this.readMULT();
                // MULT
                break;
            case 'DIVI':
                this.readDIVI();
                // DIVI
                break;
            case 'INV':
                this.readINV();
                // INV
                break;
            case 'AND':
                this.readAND();
                break;
            case 'OR':
                this.readOR();
                break;
            case 'NEG':
                this.readNEG();
                break;
            case 'CME':
                this.readCME();
                break;
            case 'CMA':
                this.readCMA();
                break;
            case 'CEQ':
                this.readCEQ();
                break;
            case 'CDIF':
                this.readCDIF();
                break;
            case 'CMEQ':
                this.readCMEQ();
                break;
            case 'CMAQ':
                this.readCMAQ();
                break;
            default:
                //label;
                break;
        }
    }

    readSTART() {
        this.s = - 1;
    }

    readALLOC(n, o) {
        var k = 0;
        while (k < n) {
            this.s = this.s + 1;
            this.m[this.s] = this.m[o + k]
        }
    }

    readDALLOC(n, o) {
        var k = n - 1;

        while (k => 0) {
            this.m[o + k] = this.m[this.s];
            this.s = this.s - 1;
        }

    }

    readCALL(p) {
        this.s = this.s + 1;
        this.m[this.s] = this.i + 1;
        this.i = p;
    }

    readRETURN() {
        this.i = this.m[this.s]; //nao tenho certeza dethis.sthis.se I pagina 99
        this.s = this.s - 1;
    }

    readRETURNF() {
        // ithis.mplethis.mentar o RETURNF
    }

    readSTR(n) {
        this.m[n] = this.m[this.s];
        this.s = this.s - 1;
    }

    readRD(k) {
        this.s = this.s + 1;
        this.m[this.s] = k; // arruthis.mar, precithis.sa ler do teclado.
    }

    readPRN() {
        // console.log(this.m[this.s]);//ithis.mprithis.mir this.m[this.s]
        this.s = this.s - 1;
    }

    readHLT() {
        //parar;
    }

    readLDC(k) {
        this.s = this.s + 1;
        this.m[this.s] = k;
    }

    readLDV(n) {
        this.s = this.s + 1;
        this.m[this.s] = this.m[n];
    }

    readADD() {
        this.m[this.s - 1] = this.m[this.s - 1] + this.m[this.s];
        this.s = this.s - 1;
    }

    readSUB() {
        this.m[this.s - 1] = this.m[this.s - 1] - this.m[this.s];
        this.s = this.s - 1;
    }

    readMULT() {
        this.m[this.s - 1] = this.m[this.s - 1] * this.m[this.s];
        this.s = this.s - 1;
    }

    readDIVI() {
        this.m[this.s - 1] = this.m[this.s - 1] / this.m[this.s];
        this.s = this.s - 1;
    }

    readINV() {
        this.m[this.s] = -(this.m[this.s])
    }

    readAND() {
        if (this.m[this.s - 1] == 1 && this.m[this.s] == 1) {
            this.m[this.s - 1] = 1;
        }
        else {
            this.m[this.s - 1] = 0;
        }

        this.s = this.s - 1;
    }

    readOR() {
        if (this.m[this.s - 1] == 1 || this.m[this.s] == 1) {
            this.m[this.s - 1] = 1;
        }
        else {
            this.m[this.s - 1] = 0;
        }

        this.s = this.s - 1;
    }

    readNEG() {
        this.m[this.s] = 1 - this.m[this.s];
    }

    readCME() {
        if (this.m[this.s - 1] < this.m[this.s]) {
            this.m[this.s - 1] = 1
        }
        else {
            this.m[this.s - 1] = 0
        }

        this.s = this.s - 1;
    }

    readCMA() {
        if (this.m[this.s - 1] > this.m[this.s]) {
            this.m[this.s - 1] = 1
        }
        else {
            this.m[this.s - 1] = 0;
        }

        this.s = this.s - 1;
    }

    readCEQ() {
        if (this.m[this.s - 1] == this.m[this.s]) {
            this.m[this.s - 1] = 1;
        }
        else {
            this.m[this.s - 1] = 0;
        }

        this.s = this.s - 1;
    }

    readCDIF() {
        if (this.m[this.s - 1] != this.m[this.s]) {
            this.m[this.s - 1] = 1;
        }
        else {
            this.m[this.s - 1] = 0;
        }

        this.s = this.s - 1;
    }

    readCMEQ() {
        if (this.m[this.s - 1] <= this.m[this.s]) {
            this.m[this.s - 1] = 1;
        }
        else {
            this.m[this.s - 1] = 0;
        }

        this.s = this.s - 1;
    }

    readCMAQ() {
        if (this.m[this.s - 1] >= this.m[this.s]) {
            this.m[this.s - 1] = 1;
        }
        else {
            this.m[this.s - 1] = 0;
        }

        this.s = this.s - 1;
    }

    readJMP(p) {
        this.i = p;
    }

    readJMPF(p) {
        if (this.m[this.s] == 0) {
            this.i = p;
        }
        else {
            this.i = this.i + 1;
        }

        this.s = this.s - 1;
    }

    atualizar() {
        console.log("-----------------------------");
        console.log("i = " + this.i);
        console.log("s = " + this.s);
        console.log("Memoria = " + this.m);
        console.log("-----------------------------");
    }
}

module.exports = { AssemblyReader }