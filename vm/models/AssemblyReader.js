let Labels = require('./Labels');

class AssemblyReader {
    constructor() {
        this.i = 0; // linha do codigo
        this.s = 0; // posicao da pilha
        this.m = []; // pilha de memoria
        this.program_reg = 0;
        this.program_m = []
        this.labels = []; // lista de objetos de jmps
    }

    createListLabel(program){
        var aux;
        for(var i = 0; i < program.length; i++){
            aux = program[i].split(' ');
            // console.log(aux)
            if(aux[1] == "NULL"){
                this.labels.push(new Labels.Labels(aux[0], i + 1))
            }
        }
    }

    findLabel(label){
        var label_ = this.labels.find(element => element.labels === label);
        var line = label_.line;
        return line;
    }

    verify(program) {
        console.log(program);
        var params = program.split(' ');
        program = params[0]
        if(params.length > 1){
            params = params[1].replace(' ', '');
            params = params.split(',')
        }
        // console.log(params[0], params[1])
        switch (program) {
            case 'JMP':
                this.readJMP(params[0])
                return this.i;
                break;
            case 'JMPF':
                this.readJMPF(params[0])
                return this.i;
                break;
            case 'START':
                this.readSTART();
                break;
            case 'ALLOC':
                this.readALLOC(params[0],params[1]);
                break;
            case 'DALLOC':
                this.readDALLOC(params[0],params[1]);
                break;
            case 'CALL':
                this.readCALL(params[0]);
                return 0;
                // CALL p
                break;
            case 'RETURN':
                this.readRETURN();
                // RETURN
                break;
            case 'RETURNF':
                if(params) this.readRETURNF(params[0]);
                else this.readRETURNF_noparams();
                // RETURNF
                break;
            case 'STR':
                this.readSTR(params[0]);
                // STR A
                break;
            case 'RD':
                this.readRD(params[0]);
                // RD não tem parametros porém precisamos ler do teclado algo.
                break;
            case 'PRN':
                this.readPRN();
                // PRN
                break;
            case 'HLT':
                this.readHLT();
                return 1;
                // HLT
                break;
            case 'LDC':
                this.readLDC(params[0]);
                // LDC k
                break;
            case 'LDV':
                this.readLDV(params[0]);
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
        this.i = this.i + 1;
        return 0;
    }

    readSTART() {
        this.s = - 1;
    }

    readALLOC(m, n) {
        var k = 0;
        while (k < n) {
            this.s = this.s + 1; // anda uma pos
            // this.m[this.s] = this.m[m + k] // m[]
            this.m[this.s] = "?";
            k++;
        }
    }

    readDALLOC(m, n) { //
        let k = parseInt(n) - 1;

        while (k >= 0) {
            this.m[parseInt(m) + parseInt(k)] = this.m[this.s];
            this.s = parseInt(this.s) - 1;
            this.m.pop()
            k = parseInt(k) - 1;
        }

    }

    readCALL(p) {
        this.program_reg = this.program_reg + 1; // program_s == this.s so que da pilha de call
        this.program_m[this.program_reg] = this.i + 1; // program_m == pilha de return do call
        this.i = this.findLabel(p);
    }

    readRETURN() {
        this.i = this.program_m[this.program_reg]; //nao tenho certeza dethis.sthis.se I pagina 99
        this.program_reg = this.program_reg - 1;
    }

    readRETURNF(m, n) {
        var k = n - 1;
        var aux = this.m.pop();

        while(k => 0){
            this.m[m + k] = this.m[this.s]
            this.s = this.s - 1;
            k--;
        }

        readRETURN();
        this.m.push(aux)
    }

    readRETURNF_noparams(){
        var k = n - 1;

        while(k => 0){
            this.m[m + k] = this.m[this.s]
            this.s = this.s - 1;
            k--;
        }

        readRETURN();
    }

    readSTR(n) {
        this.m[n] = this.m[this.s];
        this.s = this.s - 1;
        this.m.pop();
    }

    readRD(k) {
        this.s = this.s + 1;
        this.m[this.s] = k; // arruthis.mar, precithis.sa ler do teclado.
    }

    readPRN() {
        console.log("PRN -> " + this.m[this.s]);
        this.s = this.s - 1;
    }

    readHLT() {
        this.i = this.i + 1;
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
        this.m[this.s - 1] = parseInt(this.m[this.s - 1]) + parseInt(this.m[this.s]);
        this.s = this.s - 1;
        this.m.pop()
    }

    readSUB() {
        this.m[this.s - 1] = parseInt(this.m[this.s - 1]) - parseInt(this.m[this.s]);
        this.s = this.s - 1;
        this.m.pop() // retirando da pilha, porem não é necessario
        // é so pra ficar mais facil pra ler
        // pode tirar todos esses pop se quiser
    }

    readMULT() {
        this.m[this.s - 1] = parseInt(this.m[this.s - 1]) * parseInt(this.m[this.s]);
        this.s = this.s - 1;
        this.m.pop(); // retira um da pilha, pq o valor ta com s-1
        // nao posso dar outro pop por causa que o resultado do valor vai estar lá
    }

    readDIVI() {
        this.m[this.s - 1] = parseInt(this.m[this.s - 1]) / parseInt(this.m[this.s]);
        this.s = this.s - 1;
        this.m.pop()
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
        this.m.pop() // pra ficar mais facil de ler a variavel
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
        this.i = this.findLabel(p); // procurar no codigo onde ta o LX
    }

    readJMPF(p) {
        if (this.m[this.s] == 0) {
            this.i = this.findLabel(p); // procurar no codigo onde ta o LX
        }
        else {
            this.i = this.i + 1;
            //this.i = this.i + 1; // comentei por causa de:
            //i iria ficar errado.
            //pq o i ta sendo adicionado na main()
        }
        this.m.pop(); // pode dar bug, qualquer coisa remover
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