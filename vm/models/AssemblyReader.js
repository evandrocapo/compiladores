class AssemblyReader {
    constructor (){
        this.i = 0; // linha do codigo
        this.s = 0; // posicao da pilha
        this.m = []; // pilha
    }

    verify(program){
        program = program.split(" ");
        
        switch (program) {
            case 'JMP':
                this.readCALL()
                break;
            case 'JMPF':
                
                break;
            case 'START':
                
                break;
            case 'ALLOC':
                
                break;
            case 'DALLOC':
                
                break;
            case 'CALL':
                 // CALL p
                break;
            case 'RETURN':
                 // RETURN
                break;
            case 'RETURNF':
                 // RETURNF
                break;
            case 'STR':
                 // STR A
                break;
            case 'RD':
                 // RD não tem parametros porém precisamos ler do teclado algo.
                break;
            case 'PRN':
                 // PRN
                break;
            case 'HLT':
                 // HLT
                break;
            case 'LDC':
                 // LDC k
                break;
            case 'LDV':
                 // LDV n
                break;
            case 'ADD':
                 // ADD
                break;
            case 'SUB':
                 // SUB
                break;
            case 'MULT':
                 // MULT
                break;
            case 'DIVI':
                 // DIVI
                break;
            case 'INV':
                 // INV
                break;
            case 'AND':
                 
                break;
            case 'OR':
                 
                break;
            case 'NEG':
                    
                break;
            case 'CME':
                    
                break;
            case 'CMA':
                    
                break;
            case 'CEQ':
                    
                break;
            case 'CDIF':
                    
                break;
            case 'CMEQ':
                    
                break;
            case 'CMAQ':
                    
                break;
            default:
                //label;
                break;
        }
    }


    readSTART(){
        s = - 1;
    }

    readALLOC(n, o){
        var k = 0;
        while(k < n){
            s = s + 1;
            m[s] = m[o+k]
        }
    }

    readDALLOC(n, o){
        var k = n-1;

        while(k => 0){
            m[o+k] = m[s];
            s = s - 1;
        }

    }

    readCALL(p){
        s = s + 1;
        m[s] = i + 1;
        i = p;
    }

    readRETURN(){
        i = m[s]; //nao tenho certeza desse I pagina 99
        s = s - 1;
    }

    readRETURNF(){
        // implementar o RETURNF
    }

    readSTR(n) {
        m[n] = m[s];
        s = s - 1;
    }

    readRD(k){
        s = s + 1;
        m[s] = k; // arrumar, precisa ler do teclado.
    }

    readPRN(){
        print(m[s]);//imprimir m[s]
        s = s - 1;
    }

    readHLT(){
        //parar;
    }

    readLDC(k){
        s = s + 1;
        m[s] = k;
    }

    readLDV(n){
        s = s + 1;
        m[s] = m[n];
    }

    readADD(){
        m[s-1] = m[s-1] + m[s];
        s = s - 1;
    }

    readSUB(){
        m[s-1] = m[s-1] - m[s];
        s = s - 1;
    }

    readMULT(){
        m[s-1] = m[s-1] * m[s];
        s = s - 1;
    }

    readDIVI(){
        m[s-1] = m[s-1] / m[s];
        s = s - 1;
    }

    readINV(){
        m[s] = -(m[s])
    }

    readAND(){
        if(m[s-1] == 1 && m[s] == 1){
            m[s-1] = 1;
        }
        else{
            m[s-1] = 0;
        }

        s = s - 1;
    }

    readOR(){
        if(m[s-1] == 1 || m[s] == 1){
            m[s-1] = 1;
        }
        else{
            m[s-1] = 0;
        }

        s = s - 1;
    }

    readNEG(){
        m[s] = 1 - m[s];
    }

    readCME(){
        if(m[s-1] < m[s]){
            m[s-1] = 1
        }
        else{
            m[s-1] = 0
        }

        s = s - 1;
    }

    readCMA(){
        if(m[s-1] > m[s]){
            m[s-1] = 1
        }
        else{
            m[s-1] = 0;
        }

        s = s - 1;
    }

    readCEQ(){
        if(m[s-1] == m[s]){
            m[s-1] = 1;
        }
        else{
            m[s-1] = 0;
        }

        s = s - 1;
    }

    readCDIF(){
        if(m[s-1] != m[s]){
            m[s-1] = 1;
        }
        else{
            m[s-1] = 0;
        }

        s = s - 1;
    }

    readCMEQ(){
        if(m[s-1] <= m[s]){
            m[s-1] = 1;
        }
        else{
            m[s-1] = 0;
        }

        s = s - 1;
    }

    readCMAQ(){
        if(m[s-1] >= m[s]){
            m[s-1] = 1;
        }
        else{
            m[s-1] = 0;
        }

        s = s - 1;
    }

    readJMP(p){
        i = p;
    }

    readJMPF(p){
        if(m[s] == 0){
            i = p;
        }
        else{
            i = i + 1;
        }

        s = s - 1;
    }

    readNULL(){

    }
}

module.exports = {AssemblyReader}